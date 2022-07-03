// Desafío parte 1
function imgBorder() {

    const thunder = document.getElementById('thunder');
    
    if (thunder.style.border === "") {
        thunder.style.border = "2px solid red";
    } else {
        thunder.style.border = "";
    }
}


// Desafío parte 2
function verificar() {

    let numSticker1 = document.querySelector('#numSticker1');
    let numSticker2 = document.querySelector('#numSticker2');
    let numSticker3 = document.querySelector('#numSticker3');

    numSticker1 = Number(numSticker1.value); 
    numSticker2 = Number(numSticker2.value); 
    numSticker3 = Number(numSticker3.value);
    
    const totalSticker = numSticker1 + numSticker2 + numSticker3;
    const stickersText = document.getElementById('stickersText');
    
    if (totalSticker > 10) {
        stickersText.innerHTML = 'Llevas demasiados stickers';
    } else if (totalSticker <= 10) {
        stickersText.innerHTML = 'Llevas ' + totalSticker + ' stickers en total';
    }


}


// Desafío parte 3
function ingresar() {

    // Se guardan los elementos select del DOM a utilizar
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;

    // total de select
    const password = select1 + select2 + select3;

    //Se guarda la variable donde se mostrará el texto según el password ingresado
    const passText = document.getElementById('passText');

     if (password === '911') {
         passText.innerHTML = 'Password 1 correcto';
     } else if (password === '714') {
         passText.innerHTML = 'Password 2 correcto';
     } else {
         passText.innerHTML = 'Password incorrecto';
     }

}

// Se guarda la variable del botón a utlizar para el form
const btnIngresar = document.getElementById('btnIngresar');

// En este caso se utlizará addEventListener, asociada a la acción click en el botón
btnIngresar.addEventListener("click", ingresar);







