const {gets, print, arrLenght} = require('./aux-functions');

// Get the first number list
let high = gets();

for (let i = 0; i < (arrLenght() - 1); i++){
    let numb = gets();
    if (high < numb){
        high = numb;
    }
}

print(high);