import numexpr
from numpy import pi
from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/")
def hello_world():
    return render_template('index.html')


@app.route('/calcular', methods=['POST'])
def calcular():

    request_data = request.get_json()
    try:
        valor = str(numexpr.evaluate(request_data['calculo']))
    except SyntaxError:
        valor = "Syntax Error"
    except TypeError:
        valor = "Error"

    return valor
