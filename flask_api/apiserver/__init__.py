from flask import Flask


app = Flask(__name__)

app.config.from_object('apiserver.settings')

app.url_map.strict_slashes = False


# Set flask secret key for sessions
app.secret_key = app.config.get('FLASK_SESSION_SECRET_KEY')


# Set the level of logging
def setup_logging():

    import logging
    from logging.handlers import SysLogHandler
    from logging import Formatter

    syslog_handler = SysLogHandler(address='/dev/log')

    levels = {
        'FATAL':   logging.FATAL,
        'ERROR':   logging.ERROR,
        'WARNING': logging.WARNING,
        'WARN':    logging.WARN,
        'INFO':    logging.INFO,
        'DEBUG':   logging.DEBUG
    }

    log_level = app.config.get('FLASK_LOG_LEVEL', 'DEBUG')


    syslog_handler.setLevel(levels[log_level])

    app.logger.addHandler(syslog_handler)


setup_logging()



from apiserver import core
from apiserver import api_routes




