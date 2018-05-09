window.onload = function() {
    var Numerador1 = 0,
        Numerador2 = 0,
        Denominador1 = 0,
        Denominador2 = 0;
    var opcion = div => document.getElementById(div);

    function validar() {
        val = false;

        if (opcion("denomFrac1").value != 0 && opcion("denomFrac2").value != 0) {
            Numerador1 = parseInt(opcion("numFrac1").value);
            Denominador1 = parseInt(opcion("denomFrac1").value);
            Numerador2 = parseInt(opcion("numFrac2").value);
            Denominador2 = parseInt(opcion("denomFrac2").value);
            val = true;
        } else if (opcion("denomFrac1").value === 0 || opcion("denomFrac2").value === 0) {
            alert("El denominador del fraccionario no puede ser 0");
            val = false;
        }
        return val;
    }

    const Suma = () => {
        var numRes = 0;
        var denomRes = 0;

        if (Denominador1 === Denominador2) {
            numRes = Numerador1 + Numerador2;
            denomRes = Denominador1;
        } else {
            Numerador1 = Numerador1 * Denominador2;
            Numerador2 = Numerador2 * Denominador1;
            denomRes = Denominador1 * Denominador2;

            numRes = Numerador1 + Numerador2;
        }
        var fracRes = numRes + "/" + denomRes;

        var mcd = gcd(numRes, denomRes);
        numRes = numRes / mcd;
        denomRes = denomRes / mcd;
        var frac = numRes + "/" + denomRes;

        var fracSim = frac;

        opcion("numFracResult").value = numRes;
        opcion("denomFracResult").value = denomRes;

        console.log("La fraccion original es: " + fracRes);
        console.log("La fraccion simplificada es: " + fracSim);
    };
    const Resta = (Frac1, Frac2) => {
        var numRes = 0;
        var denomRes = 0;

        if (Denominador1 === Denominador2) {
            numRes = Numerador1 - Numerador2;
            denomRes = Denominador1;
        } else {
            Numerador1 = Numerador1 * Denominador2;
            Numerador2 = Numerador2 * Denominador1;
            denomRes = Denominador1 * Denominador2;

            numRes = Numerador1 - Numerador2;
        }
        var fracRes = numRes + "/" + denomRes;

        if (fracRes != 0) {
            var mcd = gcd(numRes, denomRes);
            numRes = numRes / mcd;
            denomRes = denomRes / mcd;
            var frac = numRes + "/" + denomRes;

            var fracSim = frac;
        } else {
            fracRes = 0;
            fracSim = 0;
        }

        opcion("numFracResult").value = numRes;
        opcion("denomFracResult").value = denomRes;

        console.log("La fraccion original es: " + fracRes);
        console.log("La fraccion simplificada es: " + fracSim);
    };
    const Mult = () => {
        var numRes = Numerador1 * Numerador2;
        var denomRes = Denominador1 * Denominador2;
        var fracRes = numRes + "/" + denomRes;

        var mcd = gcd(numRes, denomRes);
        numRes = numRes / mcd;
        denomRes = denomRes / mcd;
        var frac = numRes + "/" + denomRes;

        var fracSim = frac;

        opcion("numFracResult").value = numRes;
        opcion("denomFracResult").value = denomRes;

        console.log("La fraccion original es: " + fracRes);
        console.log("La fraccion simplificada es: " + fracSim);
    };
    const Div = () => {
        var numRes = Numerador1 * Denominador2;
        var denomRes = Denominador1 * Numerador2;
        var fracRes = numRes + "/" + denomRes;

        var mcd = gcd(numRes, denomRes);
        numRes = numRes / mcd;
        denomRes = denomRes / mcd;
        var frac = numRes + "/" + denomRes;

        var fracSim = frac;

        opcion("numFracResult").value = numRes;
        opcion("denomFracResult").value = denomRes;

        console.log("La fraccion original es: " + fracRes);
        console.log("La fraccion simplificada es: " + fracSim);
    };
    opcion("suma").addEventListener("click", event => {
        if (validar() == true) {
            Suma();
        }
    });
    opcion("resta").addEventListener("click", event => {
        if (validar() == true) {
            Resta();
        }
    });
    opcion("multiplicacion").addEventListener("click", event => {
        if (validar() == true) {
            Mult();
        }
    });
    opcion("division").addEventListener("click", event => {
        if (validar() == true) {
            Div();
        }
    });

    function gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
};