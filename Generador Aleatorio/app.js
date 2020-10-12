console.log('/*==== Generador Aleatorio ====*/');
console.log('');

// Empezamos

var randomPick = (value, min, max) => {
    var range = max - min + 1
    var randomNumber = () => Math.floor(Math.random() * range) + min
    var result = [];

    for (var i = 0; i < value; i++) {      
        result[i] = randomNumber();    
    } 
   
    for (var i = 0; i < value; i++) {        
        if(result[i] === result[i + 1]) {            
            result[i] = randomNumber();
        }           
    } 

    return result;
}

console.log(randomPick(5, 1, 10));
console.log('Resultado final');


console.log('');
console.log('/*==== Generador Aleatorio ====*/');