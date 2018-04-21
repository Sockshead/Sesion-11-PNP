window.onload = function() {

    var opcion = div => document.getElementById;



    /*const Suma = (Frac1, Frac2) => {

    };
    const Resta = (Frac1, Frac2) => {

    };*/
    const Mult = (a, b, c, d) => {
        var numRes = a * b;
        var denomRes = c * d;

        var simplify = gcd(numRes, denomRes);
        numRes = numRes / simplify;
        denomRes = denomRes / simplify;
        //return numRes + "/" + denomRes;
        console.log(numRes + "/" + denomRes);
    };
    /*const Div = (Frac1, Frac2) => {

    };
    opcion("suma").addEventListener("click", event => {
        Suma();
    });
    opcion("resta").addEventListener("click", event => {
        Resta();
    });*/
    opcion("multiplicacion").addEventListener("click", event => {
        this.validar();
        Mult(Numerador1, Numerador2, Denominador1, Denominador2);
    });
    /*opcion("division").addEventListener("click", event => {
        Div();
    });*/
    function validar() {
        if (opcion("denomFrac1").value === 0 || opcion("denomFrac2").value === 0) {
            alert("El denominador del fraccionario no puede ser 0");
        }
        while (parseInt(opcion("denomFrac1").value) != 0) {
            let Numerador1 = parseInt(opcion("numFrac1").value);
            let Denominador1 = parseInt(opcion("denomFrac1").value);
        }
        while (parseInt(opcion("denomFrac2").value) != 0) {
            let Numerador2 = parseInt(opcion("numFrac2").value);
            let Denominador2 = parseInt(opcion("denomFrac2").value);
        }
    }

    function gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }

        return a;
    }
};