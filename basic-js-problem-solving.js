//1.converting seer to mon.//
function seerToMon(seer) {
    if (seer < 0) {
        return 'Please give a positive value';      // validation error message.
    }
    if (typeof seer != 'number') {
        return 'Please give a numeric positive value';       // validation error message.
    }
    const mon = seer / 40;                          // 40 seer = 1 mon.
    return mon;
}
//testing
const getMon = seerToMon(80);                      // function calling.
console.log(getMon);


//2.calculating total amount of sales.//
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return 'Please give a numeric positive value';      // validation error message.
    }

    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number') {
        return 'Please give a numeric positive value';      // validation error message.
    }
    // per product price
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    // calculating total amount of per product.
    const totalShirtPrice = perShirtPrice * shirtQuantity;
    const totalPantPrice = perPantPrice * pantQuantity;
    const totalShoePrice = perShoePrice * shoeQuantity;
    // calculating total amount.
    const total = totalShirtPrice + totalPantPrice + totalShoePrice;
    return total;
}
//testing
const shirtSales = 5;
const pantSales = 2;
const shoeSales = 1;
const totalAmount = totalSales(shirtSales, pantSales, shoeSales);          // function calling.
console.log(totalAmount);


//3.calculating total delivery cost.//
function deliveryCost(tShirtQuantity) {
    if (tShirtQuantity < 0) {
        return 'Please give a numeric positive value';      // validation error message.
    }
    if (typeof tShirtQuantity != 'number') {
        return 'Please give a numeric positive value';       // validation error message.
    }
    const firstPerT_ShirtPrice = 100;
    const secondPerT_ShirtPrice = 80;
    const restPerT_ShirtPrice = 50;
    // calculating first 100 t-shirts
    if (tShirtQuantity <= 100) {
        const totalPrice = firstPerT_ShirtPrice * tShirtQuantity;
        return totalPrice;
    }
    // calculating second 100 t-shirts with first 100 t-shirts
    else if (tShirtQuantity <= 200) {
        const firstT_ShirtsPrice = firstPerT_ShirtPrice * 100;
        const restT_Shirt = tShirtQuantity - 100;
        const secondT_ShirtsPrice = restT_Shirt * secondPerT_ShirtPrice;
        const totalPrice = firstT_ShirtsPrice + secondT_ShirtsPrice;
        return totalPrice;
    }
    // calculating rest t-shirts with first 100 & second 100.
    else {
        const firstT_ShirtsPrice = firstPerT_ShirtPrice * 100;
        const secondT_ShirtsPrice = secondPerT_ShirtPrice * 100;
        const restT_Shirt = tShirtQuantity - 200;
        const restT_ShirtsPrice = restT_Shirt * restPerT_ShirtPrice;
        const totalPrice = firstT_ShirtsPrice + secondT_ShirtsPrice + restT_ShirtsPrice;
        return totalPrice;
    }
}
//testing
const productQuantity = 201;
const getTotalCost = deliveryCost(productQuantity);            // function calling.
console.log(getTotalCost);


//4.finding friend name with 5 letters.//
function perfectFriend(names) {
    for (const name of names) {
        if (typeof name == 'number') {
            return 'Please give a string value';      // validation error message.
        }
        if (name.length == 5) {
            return name;
        }
    }
}

const friends = ['Isra', 'Sabbir', 'Nahid', 'Jahid', 'Maidul'];
// testing
const bestFriend = perfectFriend(friends);              // function calling.
console.log(bestFriend);

                                // End 