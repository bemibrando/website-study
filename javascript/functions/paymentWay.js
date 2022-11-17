function applyDiscount (price, discount){
    return price - (price * (discount / 100));
}
function applyFees (price, fee){
    return price + (price * (fee / 100));
}

function paymentDiscount (price, paymentWay){
    switch(paymentWay){
        case 1:
            console.log("1- Debit: 10% off");
            return applyDiscount(price, 10);
        case 2:
            console.log("2- Money: 15% off");
            return applyDiscount(price, 15);
        case 3:
            console.log("3- PIX: 15% off");
            return applyDiscount(price, 15);
        case 4:
            console.log("4- Credit x2");
            return applyDiscount(price, 0);
        case 5:
            console.log("5- Credit x3+: 10%");
            return applyFees(price, 10);
    }
}

const originalPrice = 150;
let paymentWay = 5;

let finalPrice = paymentDiscount(originalPrice, paymentWay);


console.log(originalPrice, "||", finalPrice);