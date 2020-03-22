
var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded", event=>{
    let mostrarVista = $("[class*='mostrar-alumno']"),
    mostrarDocente = $("[class*='mostrar-docentes]");
    mostrarVista.addEventListener('click', e=>{
        e.stopPropagation();

        let modulo = e.srcElement.dataset.modulo;
        fetch('public/vistas/alumnos/alumnos.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;

            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click", event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
            script = document.createElement("script");
            script.src =`public/vistas/${modulo}/${modulo}.js`;
            cuerpo.appendChild(script);
        });
    });

    mostrarDocente.addEventListener('click',e=>{
        e.stopPropagation();

        let modulo = e.srcElement.dataset.modulo;
        fetch('public/vistas/Docente/docente.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;
        });

        let btnCerrar = $(".close");
        btnCerrar.addEventListener("click", e=>{
            $(`#vista-${modulo}`).innerHTML = "";
        });

        let cuerpo = $("body"),
        script = document.createElement("script");
        script.src = `public/vistas/${modulos}/${modulos}.js`;
        cuerpo.appendChild(script);
    });
});