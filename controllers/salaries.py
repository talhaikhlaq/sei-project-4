from flask import Blueprint
from models.salary import Salary, SalarySchema, annual_net_salary

api = Blueprint('salaries', __name__)
salary_schema = SalarySchema()

@api.route('/salary', methods=['GET'])
def salary_calc():
    salaries = Salary.query.all()
    return annual_net_salary.jsonify(salaries, many=True), 200
