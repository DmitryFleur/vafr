from apiserver import app

from flask_sqlalchemy import SQLAlchemy
from flask import request, session, json, g


db = SQLAlchemy(app)



@app.before_request
def validate_domain():

    host_lower = request.host.lower()

    rootdomain=app.config['ROOTDOMAIN']

    if not host_lower.endswith(rootdomain):
        raise UnauthorizedException("This site only serves HTTP requests with domains that end with "+rootdomain+", was accessed with " + host_lower)



@app.after_request
def per_request_callbacks(response):

    rootdomain=app.config['ROOTDOMAIN']

    def set_cookie(name, value):
        response.set_cookie(name, value=value, max_age=None, path="/", domain="."+rootdomain)

    def delete_cookie(name):
        response.delete_cookie(name, domain="."+rootdomain)

    if 'auth' in session:
        auth = session['auth']
        set_cookie('id', value=str(auth['id']))
        set_cookie('expiry_time', value=str(auth['expiry_time']))

    else:
        delete_cookie('id')
        delete_cookie('expiry_time')

    return response


def success_response(body = None):
    if body != None:
        return json.jsonify({"success": True, "body": body}), 200

    return json.jsonify({"success": True}), 200

def applicative_error_response(code, body = None):
    if body != None:
        return json.jsonify({"success": False, "body": body}), 200

    return json.jsonify({"success": False, "code": code}), 200



class UnauthorizedException(Exception):
    def __init__(self, msg):
        self.msg = msg

@app.errorhandler(UnauthorizedException)
def raise_unauthorized_response(e):
    return e.msg, 403



