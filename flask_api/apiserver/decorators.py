
from flask import session
from functools import wraps
import datetime

def authenticated_as_admin():
    return authenticated(True)

def authenticated(require_admin = False):

    def is_expired(authentication):
        expiry_time = authentication["expiry_time"]
        now = __now_in_millis()
        return  expiry_time <= now

    def extend_authentication(authentication):
        authentication["expiry_time"] = now_plus_session_expiry()
        session.modified = True

    def wrapper(f):
        @wraps(f)
        def wrapped(*args, **kwargs):

            if not ('auth' in session):
                return "Unauthorized Access", 401

            authentication = session['auth']

            if authentication is None:
                return "Unauthorized Access", 401
            else:

                if is_expired(authentication):
                    del session['auth']
                    return "Authentication Expired", 401

                if not require_admin: # REST call requires only authentication :
                    extend_authentication(authentication)
                    return f(*args, **kwargs)

                if not authentication['is_admin']:
                    return "Unauthorized Access", 401

                extend_authentication(authentication)

                return f(*args, **kwargs)
        return wrapped
    return wrapper


def __datetime_time_millis(dt):
    epoch = datetime.datetime.utcfromtimestamp(0)
    delta = dt - epoch
    return delta.total_seconds() * 1000.0

def __now_in_millis():
    return __datetime_time_millis(datetime.datetime.utcnow())

def __millis_to_datetime(ms):
    return datetime.datetime.fromtimestamp(ms / 1000.0)

def __session_expiry_in_minutes():
    #TODO: read from config
    return 60

def now_plus_session_expiry():
    now = __now_in_millis()
    res = now + (1000 * 60 * __session_expiry_in_minutes())
    return res
