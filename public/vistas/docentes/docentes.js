var $ = el = document.querySelector(el),
frmDocentes = $("#frmDocentes");
frmDocentes.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();

    let docente = {
        accion    : 'nuevo',
        codigo    : $("#txtCodigoDocente").value,
        nombre    : $("#txtNombreDocente").value,
        direccion : $("#txtDireccionDocente").value,
        telefono  :$("#txtTelefonoDocente").value
    };
    fetch(`private/Modulos/Docentes/procesos.php?proceso=rescibirDatos&docente=${JSON.stringify(docente)}`).then( resp=>resp.json() ).then(resp=>{
        $("#respuestaDocente")
    })
})