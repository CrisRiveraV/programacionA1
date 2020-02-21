document.addEventListener("DOMContentLoaded", e=>{
  const form = document.querySelector("#frmConversores");
  form.addEventListener("submit", event=>{
      event.preventDefault();

      let de = document.querySelector("#cboDe").value,
          a = document.querySelector("#cboA").value,
          cantidad = document.querySelector("#txtCantidadConversor").value,
          opcion = document.getElementById('cboConvertir');

      let monedas = {
          "dolar":1,
          "euro":0.93,
          "quetzal":7.63,
          "lempira":24.9,
          "cordoba":34.19},
          longitudes = {
            "kilometro":1,
            "metro":1000,
            "centimetro":100000,
            "yarda":1093.61,
            "milla":0.621371,
            "pie":328084,
            "pulgada":39370.1
          },
            almacenamiento = {
              "bit":1,
              "byte":0.125,
              "kilobyte":0.000125,
              "megabyte": 0.000000125,
              "gigabyte":0.000000000125,
              "terabyte":0.000000000000125
            },
              peso = {
                "kilogramo":1,
                "gramo":1000,
                "libra":2.20462,
                "onza": 35.274
                };

      let $res = document.querySelector("#lblRespuesta");
      if(opcion.value == "moneda"){
        $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
      } else if(opcion.value == "longitud"){
        $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(5) }`;
      } else if(opcion.value == "almacenamiento"){
        $res.innerHTML = `Respuesta: ${ (almacenamiento[a]/almacenamiento[de]*cantidad) }`;
      } else if(opcion.value == "peso"){
        $res.innerHTML = `Respuesta: ${ (peso[a]/peso[de]*cantidad).toFixed(2) }`;
      };
  });
});

//llenar los select box 
function elegir_opcion() {
  let opcion = document.getElementById('cboConvertir'),
  de1 = document.getElementById('cboDe'),
  a1 = document.getElementById('cboA');
  //limpia antes de actualizar
  de1.value="";
  a1.value="";
  de1.innerHTML="";
  a1.innerHTML="";

  if(opcion.value == "moneda"){
    var  array = ["dolar!Dolar","euro!Euro","quetzal!Quetzal","lempira!Lempira","cordoba!Cordoba"]; 
  } else if(opcion.value == "longitud"){
    var array = ["kilometro!Kilometro","metro!Metro","centimetro!Centimetro","yarda!Yarda","milla!Milla","pie!Pie","pulgada!Pulgada"];
  } else if(opcion.value == "almacenamiento"){
    var array = ["bit!Bit","byte!Byte","kilobyte!Kilobyte","megabyte!Megabyte","gigabyte!Gigabyte","terabyte!Terabyte"];
  } else if(opcion.value == "peso"){
    var array = ["kilogramo!Kilogramo","gramo!Gramo","libra!Libra","onza!Onzas"];
  };

  for(var i=0;i<array.length;i++){ 
    var repair = array[i].split("!");
    var newop = document.createElement("option");
    newop.value = repair[0]
    newop.innerHTML = repair[1];
    de1.options.add(newop);
  };
  for(var i=0;i<array.length;i++){ 
    var repair = array[i].split("!");
    var newop = document.createElement("option");
    newop.value = repair[0]
    newop.innerHTML = repair[1];
    a1.options.add(newop);
  };
 }