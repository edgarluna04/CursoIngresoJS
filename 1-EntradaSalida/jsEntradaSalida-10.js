/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	let importe = parseInt(document.getElementById("txtIdImporte").value);

	let resultado = importe * (1 - 1/4);
	document.getElementById("txtIdResultado").value = resultado;

}
