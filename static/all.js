
        let calculo = "";

        function agregarNumero(valor) {

            calculo = calculo + valor;
            document.getElementById("resultado").innerHTML=calculo;
        }

        function borrar() {

            calculo = "";
            document.getElementById("resultado").innerHTML="0";

        }

        function calcular() {

            fetch('http://127.0.0.1:5000/calcular', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
                body: JSON.stringify({ "calculo": calculo })
              })
                .then(response => response.text())
                .then(result => {
                  document.getElementById("resultado").textContent = result;
                });
            calculo = "";
            }