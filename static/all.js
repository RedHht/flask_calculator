class calculadora {

    static calculo = "";
    static calculoVisual = "";

    static agregarNumero(valor, valorvisual = "") {

            this.calculo += valor;
            if (valorvisual === "") {
                this.calculoVisual += valor;
            } else {
                this.calculoVisual += valorvisual;
            }
            document.getElementById("resultado").innerHTML = this.calculoVisual;

    }

    static borrar() {

        this.calculo = "";
        this.calculoVisual = "";
        document.getElementById("resultado").innerHTML="0";

    }

    static calcular() {

        fetch( window.location.origin +  "/calcular", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "calculo": this.calculo })
        })
        .then(response => response.text())
        .then(result => {document.getElementById("resultado").textContent = result;
        });

        this.calculo = "";
        this.calculoVisual = "";

    }

}

console.log(calculadora.calculoVisual, calculadora.calculo)
