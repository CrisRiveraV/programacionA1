var $ = el => document.querySelector(el),
frmAlumnos = $("#frmAlumnos");
frmAlumnos.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();

    let alumno ={
        accion    : 'nuevo',
        codigo    : $("#txtCodigoAlumno").value,
        nombre    : $("#txtNombreAlumno").value,
        direccion : $("#txtDireccionAlumno").value,
        telefono  : $("#txtTelefonoAlumno").value
    };
    fetch (`/private/Modulos/Alumnos/procesos.php?proceso=recibiDatos&alumno=${JSON.stringify(alumno)}`),then( resp=>resp.json() ).then(resp=>{
        $("#respuestaAlumno"),innerHTML = `<div class="alert alert-success" role="alert">
        ${resp.msg}
        </div>
        `;
    });
});