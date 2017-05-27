

from apiserver import app


def runserver():
    app.run(host='0.0.0.0', port=8000, debug=app.config['DEBUG'])

if __name__ == '__main__':
	runserver()
