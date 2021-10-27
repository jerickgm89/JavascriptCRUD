var url = "http://localhost/empleados/";

var modal = new bootstrap.Modal(document.getElementById('modelId'),{keyboard:false});

var aplicacion = new (function () {
    
    this.nombre = document.getElementById("nombre");
    this.correo = document.getElementById("correo");
    this.empleados = document.getElementById("empleados");

    this.Leer = function () {
        var datos = "";
        fetch(url)
            .then((r) => r.json())
            .then((respuesta) => {
                console.log(respuesta);
                respuesta.map(function (empleado, index, array) {
                    datos += "<tr>";
                    datos += "<td>" + empleado.id + "</td>";
                    datos += "<td>" + empleado.nombre + "</td>";
                    datos += "<td>" + empleado.correo + "</td>";
                    datos +=
                        '<td><div class="btn-group" role="group" aria-label=""><button type="button" class="btn btn-info" onclick="aplicacion.Editar(' +
                        empleado.id +
                        ')">Editar</button><button type="button" class="btn btn-danger" onclick="aplicacion.Borrar(' +
                        empleado.id +
                        ')">Borrar</button></div></td>';

                    datos += "<tr>";
                });

                return (this.empleados.innerHTML = datos);
            })
            .catch(console.log);
    };
    this.Agregar = function () {
        console.log(nombre.value);
        console.log(correo.value);
        var datosEnviar = {
            nombre: this.nombre.value,
            correo: this.correo.value,
        };

        fetch(url + "?insertar=1", {
            method: "post",
            body: JSON.stringify(datosEnviar),
        })
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log("insertados");
                this.Leer();
            })
            .catch(console.log);
    };
    this.Borrar = function (id) {
        console.log(id);

        fetch(url + "?borrar=" + id)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                this.Leer();
            })
            .catch(console.log);
    };
    this.Editar= function (id){
        console.log(id);
        modal.show();
    }
})();

aplicacion.Leer();
