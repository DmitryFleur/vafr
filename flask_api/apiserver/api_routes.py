"""
Routes for the REST API are defined here.

routes are are of the form :

 '/api/1'/<module>/<function>


 example the route  '/api/1/users/signup'
 is defined in the module 

    api/users.py

 and is handled by the function 'def signup()'

"""

from apiserver import app,auth
from flask import request
from apiserver.api import testapi
from apiserver.api import users
from apiserver.decorators import *


@app.route('/1/api/login/', methods=['POST'])
def authenticate():
    return auth.authenticate(request.form['login'],request.form['pw'])



@app.route('/1/api/getcurrentuser', methods=['GET'])
@authenticated()
def get_current_user():
    return users.get_current_user(True)


@app.route('/1/api/logoutcurrentuser', methods=['GET'])
@authenticated()
def logout_current_user():
    return users.logout_current_user()


@app.route('/1/api/testforadminexclusiveroute', methods=['GET'])
@authenticated_as_admin()
def test_admin_route():
    return "Your an Admin ! ! !"




@app.route('/1/api/hello/<string:value>', methods=['GET'])
def hello(value):
    return testapi.hello(value)


