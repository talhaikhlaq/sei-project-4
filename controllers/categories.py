from flask import Blueprint
from models.category import Category, CategorySchema
from lib.secure_route import secure_route

api = Blueprint('categories', __name__)
category_schema = CategorySchema()

@api.route('/category', methods=['GET'])
@secure_route
def category_index():
    categories = Category.query.all()
    return category_schema.jsonify(categories, many=True), 200
