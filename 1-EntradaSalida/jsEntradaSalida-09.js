/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = document.getElementById("txtIdSueldo").value;

	let sueldoP = parseFloat(sueldo)

	let resultado = sueldoP * (1 + 1/10);
	document.getElementById("txtIdResultado").value = resultado

}
