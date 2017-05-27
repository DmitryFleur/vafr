
from flask import json

from apiserver import app

class ApiReturns(object):

    @staticmethod
    def ok(result=None):
        return json.jsonify({"body": result}), 200

    @staticmethod
    def applicative_error(app_error_code, result=None):
        return json.jsonify({"appErrorCode": app_error_code, "body": result}), 200

    @staticmethod
    def system_error(error_message_to_log,result=None):
        app.logger.error(error_message_to_log)
        return json.jsonify({"appErrorCode": error_message_to_log, "body": result}), 500