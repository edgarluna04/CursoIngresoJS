function mostrar()
{
    let precio;
    let descuento;

    precio = prompt("Ingrese precio");
    descuento = prompt("Ingrese descuento");

    precioFinal = parseFloat(precio) - (descuento * precio/100);

    document.getElementById("elPrecioFinal").value = precioFinal;

}
