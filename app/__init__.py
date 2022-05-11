from flask import Flask
from app.route import *

def create_app():
    app = Flask(__name__)
    app.config['JSON_AS_ASCII'] = False
    app.config['SECRET_KEY'] = 'ocnail123456789'
    app.add_url_rule('/', 'index', index, methods=['GET'])
    return app