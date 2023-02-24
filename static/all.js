class calculadora {

    constructor() {

        self.self.calculo = "";
        self.self.calculoVisual = "";

    }

    agregarNumero(valor, valorvisual = "") {
        if (valorvisual == "") {

            self.calculo += valor;
            self.calculoVisual += valor;
            document.getElementById("resultado").innerHTML=self.calculoVisual;

        } else {

            self.calculo += valor;
            self.calculoVisual += valorvisual;
            document.getElementById("resultado").innerHTML = self.calculoVisual;
        }

    }

    borrar() {

        self.calculo = "";
        self.calculoVisual = "";
        document.getElementById("resultado").innerHTML="0";

    }

    calcular() {

        fetch( window.location.origin +  "/calcular", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "calculo": self.calculo })
        })
        .then(response => response.text())
        .then(result => {document.getElementById("resultado").textContent = result;
        });

        self.calculo = "";
        self.calculoVisual = "";

    }

}

let calculadoraa = new calculadora;