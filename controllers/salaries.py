from flask import Blueprint, jsonify
from models.salary import Salary, SalarySchema
from lib.secure_route import secure_route

api = Blueprint('salaries', __name__)
salary_schema = SalarySchema()

@api.route('/salary', methods=['GET'])
def salary_calc():
    salaries = Salary.query.all()
    return salary_schema.jsonify(salaries, many=True), 200

@api.route('/salary/<int:salary_id>', methods=['GET'])
@secure_route
def single_salary_calc(salary_id):
    salary = Salary.query.get(salary_id)
    if not salary:
        return jsonify({'message': 'Not Found'}), 404
    return salary_schema.jsonify(salary), 200
