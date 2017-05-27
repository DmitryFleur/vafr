
# imports
from apiserver.api import ApiReturns
from apiserver.db_models import User
from apiserver.core import db
from flask import session


def get(id,api_return=False):

    u = User.query.filter_by(id=id).first()

    if u is not None:

        user = {
            "id": u.id,
            "login": u.login,
            "first_name": u.first_name,
            "family_name": u.family_name,
            "email": u.email,
            "is_admin": u.is_admin,
            "is_active": u.is_active,
            "first_login_at": u.first_login_at,
            "last_login_at": u.last_login_at,
            "created_at": u.created_at,
            "updated_at": u.updated_at,
            "deactivated_at": u.deactivated_at,
            "reactivated_at": u.reactivated_at
        }

        if(api_return):
            res={}
            res["user"]=user;
            return ApiReturns.ok(res)
        else:
            return user

    else:
        return False



def get_user_from_login(login,api_return=False):

    userid=db.session.query(User.id).filter_by(login=login).scalar()

    if userid is not None:
        return get(userid,api_return)
    else:
        return False



def get_current_user(api_return=False):

    if session['auth']['id'] is not None:
        return get(session['auth']['id'],api_return)
    else:
        return False

def logout_current_user():

    if session['auth']['id'] is not None:
        del session["auth"]
        session.modified = True
        res={}
        res['response']="success";
        return ApiReturns.ok(res)
    else:
        return False