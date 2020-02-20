document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();

        let convertir = document.querySelector("#cboConvertir").value,
            de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversor").value;
        console.log(convertir, de, a, cantidad);
        let monedas = {
            "dolar":1,
            "euro":0.93,
            "quetzal":7.63,
            "lempira":24.90,
            "cordova":34.19
        },
        almacenamiento={
            "bit":1,
            "kilobyte":0.001,
            "megabyte":0.000001,
            "gigabyte":0.000000001,
            "tersbyte":0.000000000001
        },
        longitud={
            "kilometro":1,
            "metro":1000,
            "centimetro":100000,
            "milla":0.621371,
            "yarda":1093.61,
            "pulgada":39370.1
        },
        masa={
            "kilogramo":1,
            "gramo":1000,
            "miligramo":1000000,
            "libra":2.20462,
            "onza":35.274
        };
        let $res = document.querySelector("#lblRespuesta");
        if(convertir.value == "monedas"){
        $res.innerHTML = `Respuesta: ${(monedas[a]/monedas[de]*cantidad).toFixed(2)}`; 
        }else if(convertir.value == "alamacenamiento"){
            $res.innerHTML = `Respuesta: ${(almacenamiento[a]/almacenamiento[de]*cantidad).toFixed(2)}`;
        }else if(convertir.value == "longitud"){
            $res.innerHTML = `Respuesta: ${(longitud[a]/longitud[de]*cantidad).toFixed(2)}`;
        }else if(convertir.value == "masa"){
            $res.innerHTML = `Respuesta: ${(masa[a]/masa[de]*cantidad).toFixed(2)}`;
        }
    });
});