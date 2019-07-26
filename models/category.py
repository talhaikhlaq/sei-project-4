from marshmallow import fields
# from sqlalchemy.ext.hybrid import hybrid_property
from app import db, ma
from models.base import BaseModel, BaseSchema

class Category(db.Model, BaseModel):
    __tablename__ = 'category'

    bills = db.Column(db.Float)
    transport = db.Column(db.Float)
    groceries = db.Column(db.Float)
    eating_out = db.Column(db.Float)
    finances = db.Column(db.Float)
    entertainment = db.Column(db.Float)
    holidays = db.Column(db.Float)
    shopping = db.Column(db.Float)
    general = db.Column(db.Float)
    expenses = db.Column(db.Float)
    family = db.Column(db.Float)
    personal_care = db.Column(db.Float)

    # pylint: disable=R0201
    def total_outgoing(self):
        total = 0
        if self.bills:
            total += self.bills
        if self.transport:
            total += self.transport
        if self.groceries:
            total += self.groceries
        if self.eating_out:
            total += self.eating_out
        if self.finances:
            total += self.finances
        if self.entertainment:
            total += self.entertainment
        if self.holidays:
            total += self.holidays
        if self.shopping:
            total += self.shopping
        if self.general:
            total += self.general
        if self.expenses:
            total += self.expenses
        if self.family:
            total += self.family
        if self.personal_care:
            total += self.personal_care
        return total
        # return self.bills + self.transport + self.groceries + self.eating_out + self.finances + self.entertainment + self.holidays + self.shopping + self.general + self.expenses + self.family + self.personal_care


class CategorySchema(ma.ModelSchema, BaseSchema):

    users = fields.Nested('UserSchema', many=True, only=('id', 'username'))
    total_outgoing = fields.Float()

    class Meta:
        model = Category
