document.addEventListener("DONContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();

        let nombre = document.querySelector("#txtnombre").value;
        fetch(`http://localhost:8080/programacioniva1/saludo.php?name=${nombre}`)
        .then(resp=>resp.text())
        .then(respuesta=>{
            document.querySelector("#lblSaludo").innerHTML = respuesta;
        });
    });
});