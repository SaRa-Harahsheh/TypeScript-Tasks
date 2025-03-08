//task 6-3-2025
//task 1: Identify if a Number is Even or Odd
var num = 1;
if (num % 2 == 0) {
    console.log("The ".concat(num, " is even"));
}
else {
    console.log("The ".concat(num, " is odd"));
}
//task 2: Filter Expensive Products from an Array 
var PriceOfProduct = [100, 200, 150, 300];
var threshold = 170;
for (var i = 0; i < PriceOfProduct.length; i++) {
    if (PriceOfProduct[i] > threshold)
        console.log(PriceOfProduct[i]);
}
//task 3: Sum All Elements in an Array
var ArrayOfNum = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < ArrayOfNum.length; i++) {
    sum = sum + ArrayOfNum[i];
}
console.log("The sum is " + sum);
