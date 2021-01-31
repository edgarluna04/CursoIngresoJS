/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let num1 = document.getElementById("txtIdNumeroUno").value;

	let num2 = document.getElementById("txtIdNumeroDos").value;

	let resultado = parseInt(num1) + parseInt(num2);

	alert("La suma es " + resultado);
	
}

function restar()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;

	let num2 = document.getElementById("txtIdNumeroDos").value;

	let resultado2 = parseInt(num1) - parseInt(num2);

	alert("La resta es " + resultado2);
	 	
}

function multiplicar()
{ 
	let num1 = document.getElementById("txtIdNumeroUno").value;

	let num2 = document.getElementById("txtIdNumeroDos").value;
	
	let resultado3 = parseInt(num1) * parseInt(num2);

	alert("La multiplicacion es " + resultado3);
}

function dividir()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;

	let num2 = document.getElementById("txtIdNumeroDos").value;
	
	let resultado3 = parseInt(num1) / parseInt(num2);

	alert("La division es " + resultado3);
}

