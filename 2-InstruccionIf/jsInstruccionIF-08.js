function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad > 18){
		if(estadoCivil == "Soltero"){
			alert("Es soltero y no es menor.")
		}
	}

}