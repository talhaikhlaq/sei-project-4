from flask import Blueprint, jsonify, request, g
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

# salary calculator as a create route
@api.route('/salary', methods=['POST'])
@secure_route
def salary_new():
    data = request.get_json()
    salary, errors = salary_schema.load(data, partial=True)
    if errors:
        return jsonify(errors), 422
    salary.user = g.current_user
    if salary.annual_gross_salary > 150000:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 45
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 2
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    elif salary.annual_gross_salary >= 50001 and salary.annual_gross_salary <= 150000:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 40
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 2
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    elif salary.annual_gross_salary >= 12501 and salary.annual_gross_salary <= 50000:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 20
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 12
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    elif salary.annual_gross_salary < 12501:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 0
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 0
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    salary.save()
    return salary_schema.jsonify(salary), 201

@api.route('/salary', methods=['PUT'])
@secure_route
def salary_update():
    salary = Salary.query.filter_by(user_id=g.current_user.id).first()
    if not salary:
        return jsonify({'message': 'Not Found'}), 404

    data = request.get_json()
    salary, errors = salary_schema.load(data, instance=salary, partial=True)
    if errors:
        return jsonify(errors), 422
    salary.user = g.current_user
    if salary.annual_gross_salary > 150000:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 45
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 2
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    elif salary.annual_gross_salary >= 50001 and salary.annual_gross_salary <= 150000:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 40
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 2
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    elif salary.annual_gross_salary >= 12501 and salary.annual_gross_salary <= 50000:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 20
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 12
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    elif salary.annual_gross_salary < 12501:
        salary.annual_tax_allowance = 12500
        salary.tax_rate = 0
        salary.annual_ni_allowance = 8632
        salary.ni_rate = 0
        salary.pension_contribution = 5
        salary.annual_non_pensionable_value = 10000

    salary.save()
    return salary_schema.jsonify(salary), 201
