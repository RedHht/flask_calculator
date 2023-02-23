from flask import *
from math import sqrt

app = Flask(__name__)


@app.route("/")
def hello_world():
    print("god")
    return render_template('index.html')


@app.route('/calcular', methods=['POST'])
def calcular():
    request_data = request.get_json()

    valor = request_data['calculo']

    print(eval(valor))

    valor = str(eval(valor))

    return valor
