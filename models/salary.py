from marshmallow import fields
from sqlalchemy.ext.hybrid import hybrid_property
from app import db, ma
from models.base import BaseModel, BaseSchema
from models.user import User, UserSchema

# pylint: disable=R0902
class Salary(db.Model, BaseModel):
    __tablename__ = 'salary'

    annual_gross_salary = db.Column(db.Float, nullable=False)
    annual_tax_allowance = db.Column(db.Float, nullable=False)
    tax_rate = db.Column(db.Float, nullable=False)
    annual_ni_allowance = db.Column(db.Float, nullable=False)
    ni_rate = db.Column(db.Float, nullable=False)
    pension_contribution = db.Column(db.Float, nullable=False)
    annual_non_pensionable_value = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref="salary")


    @hybrid_property
    def annual_tax(self):
        return round((self.annual_gross_salary - self.annual_tax_allowance) * (self.tax_rate / 100), 2)

    @hybrid_property
    def annual_ni(self):
        return round((self.annual_gross_salary - self.annual_ni_allowance) * (self.ni_rate / 100), 2)

    @hybrid_property
    def annual_pension(self):
        return round((self.annual_gross_salary - self.annual_non_pensionable_value) * (self.pension_contribution / 100), 2)

    @hybrid_property
    def annual_pension_tax_relief(self):
        return round(self.annual_pension * (self.tax_rate / 100), 2)

    @hybrid_property
    def annual_net_salary(self):
        return round(self.annual_gross_salary - self.annual_tax - self.annual_ni - self.annual_pension + self.annual_pension_tax_relief, 2)


class SalarySchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', only=('id', 'username'))
    annual_tax = fields.Float()
    annual_ni = fields.Float()
    annual_pension = fields.Float()
    annual_pension_tax_relief = fields.Float()
    annual_net_salary = fields.Float()

    class Meta:
        model = Salary
