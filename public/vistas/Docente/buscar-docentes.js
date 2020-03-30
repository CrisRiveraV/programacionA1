export function modulo(){
    var $ = el => document.querySelector(el),
        frmBuscarAlumnos = $("#txtBuscarDocente");
    frmBuscarAlumnos.addEventListener('keyup', e=>{
        traerDatos(frmBuscarDocentes.value);
    });
    let modificarAlumno = (docente)=>{
        $("#frmdocentes").dataset.accion = 'modificar';
        $("#frmdocentes").dataset.idDocente = docentes.idDocente;
        $("#txtCodigoDocente").value = docentes.codigo;
        $("#txtNombreDocente").value = docentes.nombre;
        $("#txtNITDocente").value = docentes.nit;
        $("#txtDireccionDocente").value = docentes.direccion;
        $("#txtTelefonoDocente").value = docentes.telefono;
    };
    let eliminarDocente = (idDocente)=>{
        fetch(`private/Modulos/Docentes/procesos.php?proceso=eliminarDocente&docente=${idDocente}`).then(resp=>resp.json()).then(resp=>{
            traerDatos('');
        });
    };
    let traerDatos = (valor)=>{
        fetch(`private/Modulos/Docentes/procesos.php?proceso=buscarDocente&docente=${valor}`).then(resp=>resp.json()).then(resp=>{
          let filas = '';
            resp.forEach(docente => {
                filas += `  
                    <tr data-idDocente='${docente.idDocente}' data-docente='${JSON.stringify(docente)}'>
                     <td>${docente.codigo}</td>
                     <td>${docente.nombre}</td>
                     <td>${docente.nit}</td>
                     <td>${docente.direccion}</td>
                     <td>${docente.telefono}</td>
                     <td>
                         <input type="button" class="btn btn-outline-danger text-white" value="del">
                     </td>
                    </tr>
                `;    
            });
            $("#tbl-buscar-docentes > tbody").innerHTML =
            filas;
            $("#tbl-buscar-docentes > tbody").addEventListener("click", e=>{
                if( e.srcElement.parentNode.dataset.docente==null){
                    eliminarDocente( e.srcElement.parentNode.parentNode.dataset.idDocente );
                } else {
                    modificarDocente( JSON.parse(e.srcElement.parentNode.dataset.docente) );
                }
            });
        });
    };
    traerDatos('');
}