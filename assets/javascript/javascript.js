(() => {
    const opcionpadre = document.querySelectorAll('.opcionPadre');
    const imagenCarrusel = document.querySelector('.img_carrusel');


    carrusel = () => {
        let i = 2;
        const imagen=document.createElement('img');
     
        setInterval(() => {
            i > 1 ? i = 0 : 1;
            i++;
     
        let url=imagen.src="./assets/images/carrusel_nuevo/"+i+".png";
        imagenCarrusel.setAttribute('src',url); 

        console.log(i);
        }, 10000)


    }

    carrusel();




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