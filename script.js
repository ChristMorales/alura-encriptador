


let botonEncriptar = document.querySelector("#boton-encriptar");

botonEncriptar.addEventListener("click", function(){
	let texto = document.querySelector("#texto");
	console.log(encriptar(texto));

})

function reemplazarString(texto, indice){
	let prevString = texto.substring(0, indice - 1);
	console.log(prevString);
	let postString = texto.substring(indice);
	console.log(postString);
	let nuevaString = "";
	switch (texto[indice]){
		case "a":
			nuevaString = prevString + "ai" + postString;
			break;
		case "e":
			nuevaString = prevString + "enter" + postString;
			break;
		case "i":
			nuevaString = prevString + "imes" + postString;
			break;
		case "o":
			nuevaString = prevString + "ober" + postString;
			break;
		case "u":
			nuevaString = prevString + "ufat" + postString;
			break;
		default:
		nuevaString = prevString + texto[indice] + postString;
		}
	return nuevaString;
}

function encriptar(texto){
	let encriptado = ""
	for(let i = 0; i < texto.lenght; i++){
		encriptado = reemplazarString(texto, i);
		}
	return encriptado;
	}

