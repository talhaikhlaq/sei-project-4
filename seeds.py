from app import app, db
from models.user import UserSchema
from models.salary import Salary
from models.category import Category

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    # User Data
    talha, errors = user_schema.load({
        'username': 'talha',
        'email': 'talha@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    if errors:
        raise Exception(errors)

    jack, errors = user_schema.load({
        'username': 'SyntacticSugarBear',
        'email': 'jack@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    if errors:
        raise Exception(errors)

    wes, errors = user_schema.load({
        'username': 'Wesleydale',
        'email': 'wes@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    if errors:
        raise Exception(errors)


    # Salary Data
    salary_one = Salary(
        annual_gross_salary=50000,
        annual_tax_allowance=12500,
        tax_rate=20,
        annual_ni_allowance=8632,
        ni_rate=12,
        pension_contribution=5,
        annual_non_pensionable_value=10000,
        user=jack
    )

    salary_two = Salary(
        annual_gross_salary=40000,
        annual_tax_allowance=12500,
        tax_rate=20,
        annual_ni_allowance=8632,
        ni_rate=12,
        pension_contribution=5,
        annual_non_pensionable_value=10000,
        user=wes
    )

    salary_three = Salary(
        annual_gross_salary=30000,
        annual_tax_allowance=12500,
        tax_rate=20,
        annual_ni_allowance=8632,
        ni_rate=12,
        pension_contribution=5,
        annual_non_pensionable_value=10000,
        user=talha
    )

    # jack.salary = salary_one
    # wes.salary = salary_two
    # talha.salary = salary_three

    outgoing_one = Category(
        bills=1500,
        transport=200,
        groceries=300,
        eating_out=120,
        entertainment=150,
        shopping=60,
    )

    outgoing_two = Category(
        bills=1100,
        transport=160,
        groceries=200,
        eating_out=160,
        entertainment=200,
        holidays=150,
        shopping=50,
        family=60
    )

    outgoing_three = Category(
        bills=900,
        transport=210,
        groceries=160,
        eating_out=110,
        entertainment=100,
        holidays=100,
        family=100,
        finances=120
    )

    jack.category = outgoing_one
    wes.category = outgoing_two
    talha.category = outgoing_three

    db.session.add(talha)
    db.session.add(jack)
    db.session.add(wes)
    db.session.add(salary_one)
    db.session.add(salary_two)
    db.session.add(salary_three)
    db.session.add(outgoing_one)
    db.session.add(outgoing_two)
    db.session.add(outgoing_three)

    db.session.commit()
