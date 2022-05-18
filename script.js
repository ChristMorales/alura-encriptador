


let botonEncriptar = document.querySelector("#boton-encriptar");

botonEncriptar.addEventListener("click", function(){
	let texto = document.querySelector("#texto");
	console.log(encriptar(texto.value))	;
})

function reemplazarLetra(char){
	let nuevaChar = "";
	switch (char){
		case "a":
			nuevaChar = "ai";
			break;
		case "e":
			nuevaChar = "enter";
			break;
		case "i":
			nuevaChar = "imes";
			break;
		case "o":
			nuevaChar = "ober";
			break;
		case "u":
			nuevaChar = "ufat";
			break;
		default:
			nuevaChar = char;
		}
	return nuevaChar;
}

function encriptar(texto){
	let encriptado = "";
	for(let i = 0; i < texto.length; i++){	
		encriptado = encriptado + reemplazarLetra(texto[i]);
	}
	return encriptado;
}

