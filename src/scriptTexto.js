const mostrarTexto = document.getElementById('texto');
const botones = Array.from(document.getElementsByClassName('botones'));
const espacio = ' - ';

botones.map(boton => {
    boton.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'LIMPIAR':
                mostrarTexto.innerText = '';
                break;
            case 'BORRAR':
                mostrarTexto.innerText = mostrarTexto.innerText.slice(0,-2);
                break;
            default:
               mostrarTexto.innerText += e.target.innerText + espacio + espacio;
        }
    })
})
