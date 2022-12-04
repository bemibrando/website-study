const entryNumbers = [5, 50, 10, 98, 23];
let counter = 0;

function gets(){
    const number = entryNumbers[counter]; 
    counter++;
    return number;
}

function arrLenght(){
    return entryNumbers.length;
}

function print(text){
    console.log(text);
}

module.exports = {gets, print, arrLenght};