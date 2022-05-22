let aviso = document.createElement("div");
let avisoContenido = document.createElement("p");
let main = document.querySelector("main");
aviso.appendChild(avisoContenido);


botonCopiar.addEventListener("click", function(){
	navigator.clipboard.writeText(pResultado.textContent).then(function() {
		avisoContenido.textContent = "Texto copiado al portapapeles!"
	  	mostrarAviso();
	  	setTimeout(function(){
	  		ocultarAviso()
	  	}, 750);
	  });
	}, function() {
		avisoContenido.textContent = "No se pudo copiar texto";
	  	mostrarAviso();
	  	setTimeout(function(){
	  		ocultarAviso()
	  	}, 750);
	});





function mostrarAviso(){
	main.appendChild(aviso);
	aviso.classList.add("aviso");
}

function ocultarAviso(){
	aviso.remove();
}