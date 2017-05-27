
from apiserver.core import db


class Base(db.Model):
    __abstract__ = True

    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    deactivated_at = db.Column(db.DateTime)
    reactivated_at = db.Column(db.DateTime)



class User(Base):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    login = db.Column(db.String(255), nullable = False)
    first_name = db.Column(db.String(255), nullable = False)
    family_name = db.Column(db.String(255), nullable = False)
    email = db.Column(db.String(255), nullable = False)
    pwd_hash = db.Column(db.String(255), nullable = False)
    is_admin = db.Column(db.Boolean, default=False, nullable = False)
    is_active = db.Column(db.Boolean, default=True, nullable = False)
    first_login_at = db.Column(db.DateTime)
    last_login_at = db.Column(db.DateTime)


