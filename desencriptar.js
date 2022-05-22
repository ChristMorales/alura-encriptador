let botonDesencriptar = document.querySelector("#boton-desencriptar");


botonDesencriptar.addEventListener("click", function(){
    let texto = document.querySelector("#texto");
    pResultado.textContent = desencriptar(texto.value);
    displayTexto.appendChild(pResultado);
    ocultable.classList.add("ocultable");
    botonCopiar.classList.remove("ocultable");
})

function desencriptar(texto){
    let desencriptado = texto
	desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/enter/g, "e"); 
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    return desencriptado;
}