# README #

### VAFR : Vagrant-Ansible-Flask-React Portal Starter ###

This project is aimed at creating a Web portal starter template within the Vagrant-Ansible 
development environment. It uses Python, Flask and Postgresql on the server side and React, 
Flux and Material-UI on the client side.

I made it to save me time when starting new projects... Hope it is usefull to others!

### The stack ###

- Development environment
    - Vagrant         1.9.5
    - Virtualbox      5.0.32
    - Ansible         2.3.1.0
    - PyCharm         2017.1
 

- The API server
    - NGINX         
    - Python        3
    - Flask         0.12
    - postgresql    9.6
    - SQLAlchemy    1.1.9
    - Alembic       0.9.1
        - For up-to-date Python packages list see "flask_api/requirements.txt"
        
        
- The client
    - React         15.5.4
    - Flux          3.1.2
    - Material-UI   0.18.1
    - Babel         6.23.0     (for dev)
    - Webpack       2.3.3      (for dev)
        - For up-to-date NPM packages list see "web_root/package.json"


### Getting started ###

1) In your vafr clone directory
- cp ansible/host-vagrant-vafr.model host-vagrant-vafr
- edit host-vagrant-vafr to your project especially the host names and Secret keys

2)  On your host machine. 
- edit your /etc/hosts to add an entry for your dev server (see Vagrantfile). 
- Add an entry for your local project host name pointing to the corresponding IP 
in the vagrant file (I add local.vafr.ca pointing to 192.168.80.10.)

3) Install vagrant, ansible and virtualbox
```
cd in vafr clone directory
vagrant up vafr
vagrant ssh vafr

```

4) Setup the Database
```
cd in vafr clone directory
vagrant ssh vafr
cd /vagrant/flask_api
source venv/bin/activate
export PYTHONPATH=.
alembic upgrade head
```


6) The Flask API server
```
cd /vagrant/flask_api
source venv/bin/activate
python3 run_api_server.py
```

6) The Client
- Ansible fired webpack once to compile the javascript. To recompile while 
developping use the following command
```
cd /vagrant/web_root
webpack --colors     (to manually recompile the bundle.js)

webpack --colors --progress --watch   (for automatic recompile upon code changes)
```
7) There are no authentication check mechanism implemented yet (login = password).
There are two users in the database initially so you can try the login page upfront:
- login169 (pwd=login169) : Regular user
- login221 (pwd=login221) : Admin user

### Acknowledgement ###
- To my employers
    - Centre de calcul scientifique, Université de Sherbrooke, Québec, Canada
    - Calcul Quebec (http://www.calculquebec.ca/)
    - Calcul Canada (http://www.computecanada.ca/)
    
- To the projects I am involved in:
    - GenAP (http://genap.ca)
    - CanDIG (Canadian Distributed cyber-Infrastructure for Genomics)
    
- To Maxime Lévesque (https://github.com/max-l). I used bits and pieces of his 
codes here and there.
     

- And thanks to Dan Train for the "react-stonecutter" project (https://github.com/dantrain/react-stonecutter)
for the dynamic Grid Layout.

### License ###
MIT
