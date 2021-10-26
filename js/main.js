var aplicacion = new (function () {
    var url = "http://localhost/empleados/";
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
                        '<td><div class="btn-group" role="group" aria-label=""><button type="button" class="btn btn-info">Editar</button><button type="button" class="btn btn-danger" onclick="aplicacion.Borrar(' +
                        empleado.id +
                        ')">Borrar</button></div></td>';

                    datos += "<tr>";
                });

                return (this.empleados.innerHTML = datos);
            })
            .catch(console.log);
        //datos ="<tr><td>1</td><td>JErick</td><td>jerickgm89@gmail.com</td><td>Editar | Borrar</td></tr>";
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
            body: json.stringify(datosenviar),
        })
            .then((respuesta) => respuesta.json())
            .then((datosrespuesta) => {
                console.log("insertados");
                this.leer();
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
})();

aplicacion.Leer();
