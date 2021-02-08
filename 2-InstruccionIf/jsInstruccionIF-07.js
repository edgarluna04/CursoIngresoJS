function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;

	let estadoCivil;
	estadoCivil = document.getElementById("estadoCivil").value;
	
	if(edad < 18){
		if(estadoCivil != "Soltero"){
			alert("Es muy pequeño para NO ser soltero.");
		}
	}


}