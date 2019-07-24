# from datetime import datetime, timedelta
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import validates_schema, ValidationError, fields
from app import db, ma
from models.base import BaseModel, BaseSchema

class User(db.Model, BaseModel):
    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(128), nullable=False, unique=True)
    password_hash = db.Column(db.String(128), nullable=False)

    @hybrid_property
    def password(self):
        pass



class UserSchema(ma.ModelSchema, BaseSchema):
    @validates_schema
    def check_passwords_match(self, data):
        if data.get('password') != data.get('password_confirmation'):
            raise ValidationError(
                'Passwords do not match',
                'password_confirmation'
            )

    password = fields.String(required=True)
    password_confirmation = fields.String(required=True)

    class Meta:
        model = User
        exclude = ('password_hash',)
