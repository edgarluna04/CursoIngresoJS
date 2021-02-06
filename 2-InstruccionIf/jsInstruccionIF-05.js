function mostrar()
{
	//tomo la edad  
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	
	if(edad >= 18){
		alert("No eres adolescente");
	}
	if(edad < 13){
		alert("No eres adolescente")
	}
}//FIN DE LA FUNCIÓN