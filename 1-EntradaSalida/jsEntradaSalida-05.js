/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let dato;
	dato = document.getElementById("txtIdNombre").value;

	let dato2;
	dato2 = document.getElementById("txtIdEdad").value;

	//alert("Usted se llama " + dato + " y tiene " + dato2 + " años");
	alert(`Usted se llama ${dato} y tiene ${dato2} años`);
}

