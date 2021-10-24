var aplicacion = new function () { 
    this.nombre = document.getElementById("nombre");
    this.correo = document.getElementById("correo");
    this.empleados = document.getElementById("empleados");

    this.Leer = function(){
        var datos ="";
        datos="<tr><td>1</td><td>JErick</td><td>jerickgm89@gmail.com</td><td>Editar | Borrar</td></tr>";
        return this.empleados.innerHTML=datos;
        
    }
    this.Agregar=function(){
        console.log(nombre.value);
        console.log(correo.value);
    }
 
}
aplicacion.Leer();  
