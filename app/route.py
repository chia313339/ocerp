from flask import render_template, redirect, url_for, request, send_from_directory, flash, jsonify, send_from_directory
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
import json
import datetime
import psycopg2
import sqlalchemy

def index():
    return render_template('index.html')


def login():
    return render_template('/auth/login.html')

def register():
    return render_template('/auth/register.html')

def page_not_found(e):
    return render_template('/error/404.html'), 404



def test():
    return render_template('test.html')