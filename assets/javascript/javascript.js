(() => {
    const opcionpadre = document.querySelectorAll('.opcionPadre');
    
    function cerrarTodos() {
        opcionpadre.forEach(item => item.classList.remove("mostrar"));
    }
    
    function abrir(elemento) {
        elemento.classList.add("mostrar");
    }
    
    for (let i = 0; i < opcionpadre.length; i++) {
        opcionpadre[i].addEventListener('click', (event) => {
            event.stopPropagation();
            const estaActivo = opcionpadre[i].classList.contains("mostrar");
            
            cerrarTodos();
            
            if (!estaActivo) {
                abrir(opcionpadre[i]);
            }
        });
    }
    
    document.addEventListener('click', cerrarTodos);
})();