// Función para cambiar estado del boton ingresar
let inputTexto = document.querySelectorAll(".input-texto");
inputTexto[1].addEventListener("keyup", () => {
    if (inputTexto[0].value != "" && inputTexto[1].value != "") {
        $("#btn-ingresar").removeClass('boton-desactivado-bg');
        $("#btn-ingresar").addClass('boton-activo-bg');
    } else {
        $("#btn-ingresar").addClass('boton-desactivado-bg');
    }
})
// Función para ver contraseña del login
function verPass() {
    var x = document.getElementById("input-pass");
    var y = document.querySelector(".show-password");
    if (x.type == "password") {
        x.type = "text";
        y.classList.remove('fa-eye-slash');
    } else {
        x.type = "password";
        y.classList.toggle("fa-eye-slash");
    }
}