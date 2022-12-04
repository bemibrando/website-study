const fuelPrice = 5.79
const fuelPerKm = 1
const distance = 100

console.log("What is the fuel price?");
console.log("R$", fuelPrice);

console.log("What is the car's average fuel consumption per km?");
console.log(fuelPerKm, "L/Km");

console.log("What was the distance of the trip in Km?");
console.log(distance, "Km");


let spentLiter = distance / fuelPerKm;
let spentFuel = fuelPrice * spentLiter;

console.log("R$", spentFuel.toFixed(2), " of fuel was spent");