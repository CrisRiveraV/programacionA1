document.addEventListener("DOMContentLoaded", function(){
   var pesoReal = document.getElementById("pesoReal");
   var selectEntorno =document.getElementById("selectEntorno");
   var boton = document.getElementById("btnCalcular");
   
   boton.addEventListener("click",function(){
    validar(pesoReal);
   });
});

function validar(valor){
    if(valor.value.length<1){
        alert("INGRESA TU PESO CORRECTAMENTE")
    }else {
        calcular(valor);
    }
};

function calcular(peso){
    if(selectEntorno.value==="moon"){
        pesoFinal = (parseFloat(peso.value)/9.81)*1.622;
        escribir(pesoFinal);
    }else{

    }
};

function escribir(final){
    document.getElementById("pesoFinal").innerText=final.toFixed(2);
}