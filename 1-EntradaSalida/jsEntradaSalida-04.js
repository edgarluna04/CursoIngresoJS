/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato; //reservo espacio en memoria para guardar el dato

	dato = prompt("ingrese dato"); //guardo en la variable -dato- el texto que el usuario escribio en la ventana prompt

	document.getElementById("txtIdNombre").value = dato; //copio el nombre que tengo guardado en -dato- dentro de la caja de text embebida en la pagina html

}

