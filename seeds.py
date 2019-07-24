from app import app, db
from models.user import UserSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    talha, errors = user_schema.load({
        'username': 'talha',
        'email': 'talha@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    if errors:
        raise Exception(errors)

    db.session.add(talha)

    db.session.commit()
