function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	if(edad >= 13){
		if(edad <= 17){
			alert("Eres adolescente");
		}
	}
	if(edad >= 18){
		alert("Eres mayor de edad");
	}
	if(edad < 13){
		alert("Eres un niño");
	}
}