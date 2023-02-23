
let calculo = "";
let calculoVisual = "";

class calculadora {

    agregarNumero(valor, valorvisual = "") {
        if (valorvisual == "") {

            calculo = calculo + valor;
            calculoVisual = calculoVisual + valor;
            document.getElementById("resultado").innerHTML=calculoVisual;

        } else {

            calculo = calculo + valor;
            calculoVisual = calculoVisual + valorvisual;
            document.getElementById("resultado").innerHTML = calculoVisual;
        }

    }

    borrar() {

        calculo = "";
        calculoVisual = "";
        document.getElementById("resultado").innerHTML="0";

    }

    calcular() {

        fetch('http://127.0.0.1:5000/calcular', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "calculo": calculo })
        })
        .then(response => response.text())
        .then(result => {document.getElementById("resultado").textContent = result;
        });

        calculo = "";
        calculoVisual = "";

    }

}

let calculadoraa = new calculadora;