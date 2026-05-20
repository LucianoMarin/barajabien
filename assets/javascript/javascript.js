(()=>{
'use strict'

const opcionpadre=document.querySelectorAll('.opcionPadre');
const subopciones=document.querySelectorAll('.subopciones');


/* MENU DESPLEGABLE PAGINA */

for(let i=0; i<opcionpadre.length; i++){
    for(let i=0; i<subopciones.length; i++){

        
        
        
    }
    opcionpadre[i].addEventListener('click',()=>{
   
        opcionpadre[i].className="mostrar";
        console.log(opcionpadre[i]);
    });

}


})();