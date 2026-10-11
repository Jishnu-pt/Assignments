
// product


const name = "Wireless Headphones";
const basePrice = 2000;
const discountPercent = 20;
const taxRate = 18;
const stockStatus = "in_stock";


function calculateDiscountedPrice(price, discount) {
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}

function calculateTax(price, taxRate) {
    const taxAmount = (price * taxRate) / 100;
    return taxAmount;
}


function calculateFinalPrice(price, discount, taxRate) {
    const discountedPrice = calculateDiscountedPrice(price, discount);
    const taxAmount = calculateTax(discountedPrice, taxRate);

    return discountedPrice + taxAmount;
}


function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}


function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else if (status === "out_of_stock") {
        return "Out of Stock";
    } else {
        return "Invalid Stock Status";
    }
}


const discountedPrice = calculateDiscountedPrice(
    basePrice,
    discountPercent
);

const taxAmount = calculateTax(discountedPrice, taxRate);

const finalPrice = calculateFinalPrice(
    basePrice,
    discountPercent,
    taxRate
);

const shippingMessage = isFreeShipping(finalPrice);

const stockMessage = getStockMessage(stockStatus);



console.log("Product Name:", name);
console.log("Base Price: Rs.", basePrice);
console.log("Discount:", discountPercent + "%");
console.log("Discounted Price: Rs.", discountedPrice);
console.log("Tax Rate:", taxRate + "%");
console.log("Tax Amount: Rs.", taxAmount);
console.log("Final Price: Rs.", finalPrice);
console.log("Shipping:", shippingMessage);
console.log("Stock Status:", stockMessage);

