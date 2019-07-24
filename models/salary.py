from marshmallow import fields
from app import db, ma
from models.base import BaseModel, BaseSchema

# pylint: disable=R0902
class Salary(db.Model, BaseModel):
    __tablename__ = 'salary'

    annual_gross_salary = db.Column(db.Integer, nullable=False)
    annual_tax_allowance = db.Column(db.Integer, nullable=False)
    tax_rate = db.Column(db.Integer, nullable=False)
    annual_ni_allowance = db.Column(db.Integer, nullable=False)
    ni_rate = db.Column(db.Integer, nullable=False)
    pension_contribution = db.Column(db.Integer, nullable=False)
    annual_non_pensionable_value = db.Column(db.Integer, nullable=False)

    # pylint: disable=R0913

    def annual_tax(self):
        return (self.annual_gross_salary - self.annual_tax_allowance) * (self.tax_rate / 100)

    def annual_ni(self):
        return (self.annual_gross_salary - self.annual_ni_allowance) * (self.ni_rate / 100)

    def annual_pension(self):
        return (self.annual_gross_salary - self.annual_non_pensionable_value) * (self.pension_contribution / 100)

    def annual_pension_tax_relief(self):
        return self.annual_pension * (self.tax_rate / 100)

    def annual_net_salary(self):
        return self.annual_gross_salary - self.annual_tax - self.annual_ni - self.annual_pension + self.annual_pension_tax_relief


class SalarySchema(ma.ModelSchema, BaseSchema):

    users = fields.Nested('UserSchema', many=True, only=('id', 'username'))

    class Meta:
        model = Salary
