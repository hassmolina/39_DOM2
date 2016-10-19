  function validateForm(){
   	var nombre = document.getElementById("name").value;
   	var apellido = document.getElementById("lastname").value;
   	var email = document.getElementById("input-email").value;
   	var contrasena = document.getElementById("input-password").value;
   	var bici = document.querySelector("select").value;

// NOMBRE

   if(nombre.length == 0 || nombre == null || /^\s+$/.test(nombre)){//SI NO ESCRIBE NADA
   	var span = document.createElement("span");//CREACION DE VARIABLE SUELTA EN JS
   	var input = document.getElementById("name");//INPUT
  	var div = input.parentNode;//DIV PADRE DEL INPUT
   	div.insertBefore(span, input);//COLOCAR EL SPAN ANTES DEL HERMANO QUE ES EL INPUT
   	var texto = document.createTextNode("Ingrese su nombre");//VARIABLE DE TEXTO
   	span.appendChild(texto);//AGREGAR COMO HIJO "TEXTO" A SPAN CON APPENDCHILD
   	return span;
  } 
  if (nombre.charAt(0) == nombre.charAt(0).toLowerCase()) {
  			var span = document.createElement("span");
  			var input = document.getElementById("name");
  			var div = input.parentNode;
  			div.insertBefore(span, input);
	    	var texto = document.createTextNode("La primera letra debe ser Mayuscula");
	    	span.appendChild(texto);
	    	return span;
	    }



// APELLIDO

    if(apellido.length == 0 || apellido == null || /^\s+$/.test(apellido)){
    	var span = document.createElement("span");
    	var input = document.getElementById("lastname");
    	var div = input.parentNode;
    	div.insertBefore(span, input);
    	var texto = document.createTextNode("Ingresa tu apellido");
    	span.appendChild(texto);
    	return span;
    }

  if (apellido.charAt(0) == apellido.charAt(0).toLowerCase()) {
  			var span = document.createElement("span");
  			var input = document.getElementById("lastname");
  			var div = input.parentNode;
  			div.insertBefore(span, input);
	    	var texto = document.createTextNode("La primera letra debe ser Mayuscula");
	    	span.appendChild(texto);
	    	return span;
	    }
  

// CORREO

var formula =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if (!formula.test(email))
 {
 	var span = document.createElement("span");
  	var input = document.getElementById("input-email");
   	var div = input.parentNode;
  	div.insertBefore(span, input);
 	var texto = document.createTextNode("Verifica tu correo");
 	span.appendChild(texto);
 	return span;
 }

if(contrasena.length<=6 || contrasena == null || contrasena.length == 0 ||contrasena == "password" || contrasena == "123456" || contrasena == "098754" || /^\s+$/.test(contrasena)){
	var span = document.createElement("span");
  	var input = document.getElementById("input-password");
   	var div = input.parentNode;		
  	div.insertBefore(span, input);
 	var texto = document.createTextNode("Debe contener al menos 6 caracteres");
 	span.appendChild(texto);
 	return span;
}

    if(bici.selectedIndex == 0){
    var span = document.createElement("span");
  	var input = document.getElementByTagName("select")[0].selectedIndex;
   	var div = input.parentNode;		
  	div.insertBefore(span, input);
 	var texto = document.createTextNode("Debe contener al menos 6 caracteres");
 	span.appendChild(texto);
 	
    }

}