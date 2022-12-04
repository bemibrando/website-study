class Car {
    brand;
    color;
    ethanolPerKm;
    gasPerKm;

    constructor(brand, color, ethanolPerKm, gasPerKm){
        this.brand = brand;
        this.color = color;
        this.ethanolPerKm = ethanolPerKm;
        this.gasPerKm = gasPerKm;
    }

    calculateTrip(distance, fuelType,fuelCost) {
        var spentFuel = 0;

        if(fuelType === 1){
            spentFuel = distance * this.ethanolPerKm * fuelCost;    
        }else if (fuelCost === 2){
            spentFuel = distance * this.gasPerKm * fuelCost;
        }else{
            console.log("Fuel type is invalid.\nType `1` to Ethanol or `2` to Gas.\n");
            return 0;
        }
    
        return spentFuel;
    }
}

const focus = new Car('Ford', 'NightDark', 1/7.66, 1/9.94);

console.log(focus.calculateTrip(70, 0, 5.99));