from flask import Blueprint, jsonify, request
from models.salary import Salary, SalarySchema, annual_net_salary

api = Blueprint('breeds', __name__)
salary_schema = SalarySchema()

@api.route('/salary', methods=['POST'])
def salary_calc():
    data = request.get_json()
    salary, errors = salary_schema.load(data)
    if errors:
        return jsonify(errors), 422
    return annual_net_salary(salary)
