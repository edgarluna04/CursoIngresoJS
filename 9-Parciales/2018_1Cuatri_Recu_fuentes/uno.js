
function mostrar()
{
    let ancho;
    let largo;

    ancho = prompt("Ingrese ancho");
    largo = prompt("ingrese largo");

    let suma;
    suma = parseFloat(ancho) + parseFloat(largo);

    let perimetro;
    perimetro = suma * 2;

    alert("El perimetro es " + perimetro + " metros");
}
