// The above function will always return the same result if we pass the same product price. In other words, its output doesn’t get affected by any other values/state changes. So we can call the “calculate GST” function a Pure Function

function calculateGST(productPrice) {
    return productPrice * 0.05;
}
console.log(calculateGST(15))