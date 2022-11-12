const numbs = [0, 1,2,3,4,5,6,7,8,9,10,11];

for (let i = 0; i < numbs.length; i++){
    const numbers= numbs[i];

    if(numbers % 2 === 0){
        console.log(numbers);
    }else{
        continue;
    }
}