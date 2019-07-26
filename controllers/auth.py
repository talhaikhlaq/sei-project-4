from flask import Blueprint, jsonify, request, g
from models.user import User, UserSchema
from lib.secure_route import secure_route

api = Blueprint('auth', __name__)
user_schema = UserSchema()

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user, errors = user_schema.load(data)
    if errors:
        return jsonify(errors), 422
    user.save()
    return jsonify({'message': 'Registration Successful'}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'Unauthorised'}), 401
    user = User.query.filter_by(email=data['email']).first()
    if not user or not user.validate_password(data['password']):
        return jsonify({'message': 'Unauthorised'}), 401
    return jsonify({
        'token': user.generate_token(),
        'message': f'Welcome back {user.username}'
    }), 200

@api.route('/profile', methods=['GET'])
@secure_route
def profile():
    print(g.current_user)
    return user_schema.jsonify(g.current_user), 200
