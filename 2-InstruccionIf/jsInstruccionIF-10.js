function mostrar()
{
	var aleatorio;

	aleatorio = Math.round(Math.random() * 9 + 1);

	if(aleatorio >= 9){
		alert("Excelente " + aleatorio);
	}

	else if(aleatorio < 9){
		if(aleatorio > 4){
			alert("Aprobó " + aleatorio);
		}
	}

	if(aleatorio < 4){
		alert("Vamos, la proxima se puede " + aleatorio);
	}
}

//otra opción sería usar://

//else if(aleatorio > 4){
//	alert("Vamos, la proxima se puede " + aleatorio);
//	}
//}
//
//else{
//	alert("Aprobó " + aleatorio)
//	}