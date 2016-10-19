function validateForm(){
	var name, lastname, email, password;
	nombre = document.getElementById("name").value;
	lastname = document.getElementById("lastname").value;
	email = document.getElementById("input-email").value;
	contrasena = document.getElementById("input-password").value;


	// CAMPOS OBLIGATORIOS
	if(span.nombre===""||lastname===""||email===""||contrasena===""){
		alert("Todos los campos son obligatorios");
		return false;
	}



	if(nombre == ""){
		alert("El nombre esta vacio");
		return false;
	}else if(lastname==""){
		alert("El apellido esta vacio");
		return false;
	}

}