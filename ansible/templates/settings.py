

FLASK_LOG_LEVEL="{{FLASK_LOG_LEVEL}}"

FLASK_HOME='{{flaskHome}}'

ADMIN_EMAILS='{{ADMIN_EMAILS}}'

SQLALCHEMY_DATABASE_URI = 'postgresql://{{dbuser}}:{{dbpassword}}@{{dbaddress}}:5432/{{dbname}}?client_encoding=utf8'

SQLALCHEMY_POOL_SIZE = {{SQLALCHEMY_POOL_SIZE}}

IS_VAGRANT = {{is_vagrant}}

ROOTDOMAIN = '{{rootdomain}}'

SQLALCHEMY_TRACK_MODIFICATIONS = False

LDAP_SERVER='{{LDAP_SERVER}}'
LDAP_USER_ROOTDN='{{LDAP_USER_ROOTDN}}'

FLASK_SESSION_SECRET_KEY='{{FLASK_SESSION_SECRET_KEY}}'