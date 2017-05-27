
# imports
from flask import session

from apiserver.decorators import now_plus_session_expiry

from apiserver.api import ApiReturns,users
from ldap3 import Server, Tls,Connection, ALL



def authenticate(login,password):

    if __checkPassword(login,password):

        user=users.get_user_from_login(login)

        session['auth'] = {
            "id": user['id'],
            "is_admin": user['is_admin'],
            "expiry_time": now_plus_session_expiry()
        }

        session.modified = True

        res = {
            'user' : user,
            'login_success' : True,
            'login_message' : "Successfull Login ! ! !"
        }
        print(res['user']['created_at'])
    else:
        res = {
            'login_success' : False,
            'login_message' : "Invalid login name and/or password ! ! ! . . ."
        }

    return ApiReturns.ok(res)


def logout():

    if "auth" in session:
        if session.pop('auth',None):
            res = {'logout_success': True }
        else:
            res = {'logout_success': False }
    else:
        res = {'logout_success': True}

    return ApiReturns.ok(res)


def __checkPassword(login,pwd):

    # ldap_server = Server(app.config['LDAP_SERVER'], get_info=ALL)
    #
    # userdn='uid='+login+','+app.config['LDAP_USER_ROOTDN']
    #
    # ldap_connect = Connection(ldap_server, user=userdn, password=pwd)
    #
    # if not ldap_connect.bind():
    #     print('error in bind', ldap_connect.result)
    #     return False
    # else:
    #     print('Success in bind', ldap_connect.result)
    #     return True

    #Add your own password check mechanism here

    if login==pwd:
       return True
    else:
       return False