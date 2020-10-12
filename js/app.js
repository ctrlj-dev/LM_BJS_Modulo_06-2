var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var decryptText = document.getElementById('decrypt');
var encryptText = document.getElementById('encrypt')
var text;

var searchIndex = (str, value) => {
    // Aquí sacamos un bucle para desgranar el alfabeto y sacar el índice de cada letra.
    for (var i = 0; i < str.length; i++) {
        if (str[i] === value) return i;       
    }    
    return -1;
}

//Encriptamos

var transformText = (text) => {    
    //Aquí conseguimos la posición que hemos sacado anteriormente y la comprobamos en el encriptado
    var result = "";
    text = decryptText.value;
    for (var i = 0; i < text.length; i++) {
        var position = searchIndex(plainAlphabet, text[i]);
        if (position > -1) {
            result = result + encryptedAlphabet[position];           
        }else {
            result =  result + text[i];
        }
    }   
    encryptText.value = result;
    return result;
}

// Funcionamiento a la inversa

var transformEncryptText = (text) => {
    var result = "";
    text = encryptText.value;
    for (var i = 0; i < text.length; i++) {
        var position = searchIndex(encryptedAlphabet, text[i]);
        if (position > -1) {
            result = result + plainAlphabet[position];           
        }else {
            result =  result + text[i];
        }
    }   
    decryptText.value = result;
    return result;
}

