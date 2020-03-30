export function modulo(){ 
     var $ = el = document.querySelector(el),
        frmDocentes = $("#frmdocentes");
    frmDocentes.addEventListener("submit",e=>{
        e.preventDefault();
        e.stopPropagation();

       let docente = {
            accion    : 'nuevo',
            codigo    : $("#txtCodigoDocente").value,
            nombre    : $("#txtNombreDocente").value,
            nit       : $("#txtNITDocente").value,
            direccion : $("#txtDireccionDocente").value,
            telefono  :$("#txtTelefonoDocente").value
        };
        fetch(`private/Modulos/Docentes/procesos.php?proceso=rescibirDatos&docente=${JSON.stringify(docente)}`).then( resp=>resp.json() ).then(resp=>{
             $("#respuestaDocente").innerHTML=`
                <div class="alert alert-success" role="alert">
                   ${resp.msg}
                </div>
            `;
        });
    });
    frmDocentes.addEventListener("reset",e=>{
       $("#frmdocentes").dataset.accion = 'nuevo';
       $("#frmdocentes").dataset.idDocente = '';
    });
}