

function desencriptar(texto){
    let desencriptado = texto
	desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    return desencriptado;
}