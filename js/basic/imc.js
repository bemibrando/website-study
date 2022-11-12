const weight = 52;
const height = 1.68;

const imc = weight / (height * height);
let imcResult = "Naan";

if (imc < 18.5){
    imcResult = "under weight";
}
else if (imc >= 40){
    imcResult = "severe obesity";
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

console.log(imc.toFixed(0), "||", imcResult);