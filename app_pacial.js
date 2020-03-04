document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmconversores");
    form.addEventListener("submit", event =>{
        

        let 
        de = document.getElementById("#cboDe").value;
        a= document.getElementById("#cboA").value;
        opt = document.querySelector("opciones").value;
        txtvalores = document.getElementById("#txtvalores").value;

        let  monedas={
        Dolares = "1",
        Colones ="8.75",
        Yenes ="111.72",
        Rupia ="69.75",
        Lempiras ="24.36",
        Peso_MX ="19.36",
        Bitcoin ="0.00026" 
    }
    let longitud ={
        Metro="1",
        Centimetros="100",
        Pulgada="39.3701",
        Pie="3.28084",
        Varas ="1.1963081929167",
        Yardas = "1.09361",
        Kilomentros ="0.001",
        Millas ="0.000621371"
    }

    });
});
function selecionar(){
  let 
  de1 =document.getElementById(`cboDe`),
  a1 = document.getElementById(`cboA`),
  opt = document.getElementById(`opciones`);

  de1.valor= "";
  a1.valor="";
  de1.innerHTML="";
  a1.innerHTML="";
};
if (opt.value=="monedas"){
var array=["Dolares!dolares", "Colones!colones", "Yenes!yenes","Rupia!rupia","Lempiras!lempiras","Peso_MX!peso_mx","Bitcoin!bitcoin"]
}else{
    var array=["Metro!metro",
    "Centimetros!centimetros",
    "Pulgada!pulgada",
    "Pie!pie",
    "Varas!varas",
    "Yardas!yardas",
    "Kilomentros!kilometros",
    "Millas!millas"]  
}