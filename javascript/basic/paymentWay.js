const originalPrice = 150;
let finalPrice = originalPrice;


let paymentWay = 5;

switch(paymentWay){
    case 1:
        console.log("1- Debit: 10% off");
        finalPrice = originalPrice * 0.9;
        break;
    case 2:
        console.log("2- Money: 15% off");
        finalPrice = originalPrice * 0.85;
        break;
    case 3:
        console.log("3- PIX: 15% off");
        finalPrice = originalPrice * 0.85;
        break;
    case 4:
        console.log("4- Credit x2");
        finalPrice = originalPrice;
        break;
    case 5:
        console.log("5- Credit x3+: 10%");
        finalPrice = originalPrice * 1.1;
        break;
}

console.log(originalPrice, "||", finalPrice);