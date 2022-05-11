from flask import render_template, redirect, url_for, request, send_from_directory, flash, jsonify, send_from_directory
import json
import datetime
import psycopg2
import sqlalchemy

def index():
    
    return render_template('index.html')