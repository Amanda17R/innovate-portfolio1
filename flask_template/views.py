from flask import Flask, render_template, Blueprint,redirect,url_for 
my_view = Blueprint('my_view',__name__)

@my_view.route('/')
def index():
    return render_template("index.html")

@my_view.route('/amanda')
def amanda():
    return '<h1>this is amanda first flask app</h1>'

@my_view.route('/aboutme')
def about():
    return '<h1>this is amanda first flask app</h1>'
@my_view.route('/about')
def about_redirect():
    return redirect(url_for("my_view.about"))

