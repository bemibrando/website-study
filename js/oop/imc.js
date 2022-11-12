class Person {
    name;
    weight;
    height;

    constructor (name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateImc(){
        return this.weight / (this.height * this.height);
    }

    classifyImc(){
        let imc = this.calculateImc();
        
        let imcResult = "Naan";

        if (imc < 18.5){
            imcResult = "Under weight";
        }
        else if (imc >= 40){
            imcResult = "Severe obesity";
        }
        else if (imc >= 30){
            imcResult = "Obese";
        }
        else if (imc >= 25){
            imcResult = "Overweight";
        }
        else{
            imcResult = "Normal weight";
        }

        return imcResult;
    }
}

const John = new Person('John', 52, 1.68);

console.log(John.calculateImc());
console.log(John.classifyImc());