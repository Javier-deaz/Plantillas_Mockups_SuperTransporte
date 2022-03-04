// Función para ver contraseña del login
function verPass(){
	var x = document.getElementById("input-pass");
	var y = document.querySelector(".show-password");
	if(x.type == "password"){
		x.type = "text";
		y.classList.remove('fa-eye-slash');
	}else{
		x.type = "password";
		y.classList.toggle("fa-eye-slash");
	}
}
