const gasPrice = 6.89
const ethanolPrice = 5.79
let fuelPerKm = 1
const distance = 100
const typeOfFuel = 'Gas'

console.log("What was the distance of the trip in Km?");
console.log(distance, "Km");


let spentLiter = 0;
let spentFuel = 0;

if (typeOfFuel === 'Ethanol') 
{
    fuelPerKm = 4;
    spentLiter = distance / fuelPerKm;
    spentFuel = ethanolPrice * spentLiter;
}
else if (typeOfFuel === 'Gas') 
{
    fuelPerKm = 2;
    spentLiter = distance / fuelPerKm;
    spentFuel = gasPrice * spentLiter;
}

console.log("R$", spentFuel.toFixed(2), " of ", typeOfFuel, " was spent");