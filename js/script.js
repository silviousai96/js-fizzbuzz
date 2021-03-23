//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero
//e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// imposto il ciclo mettendo la variabile i su 1 perchè mi servono i numeri da 1 a 100 
//e quando i diventa maggiore di 100 il ciclo finisce

for ( var i=1; i <= 100; i++ ) {
    
    //verifico prima la condizione multiplo di 3 e di 5, perchè se no trova per prima le altre e non riesco a far scrivere FizzBuzz
    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log('FizzBuzz');
    } else if ( i % 3 == 0 ) {
        console.log('Fizz');
    } else if ( i % 5 == 0 ) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}