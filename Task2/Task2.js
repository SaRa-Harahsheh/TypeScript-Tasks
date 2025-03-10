//Task 1: Verify Interface Properties
//You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."/*
;
var Data = { Name: "Omar", Age: 17 };
function print() {
    if (Data.Age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
}
print();
if (Data.Age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
function Subjects(teach) {
    console.log("".concat(teach.name, " teaches:"));
    for (var i = 0; i < teach.subjects.length; i++) {
        console.log(teach.subjects[i]); // طباعة كل مادة في المصفوفة
    }
}
var teach = { name: "Ahmed", subjects: ["Mathematics", "Physics", "Chemistry"] };
Subjects(teach);
// Load products from local storage or initialize as an empty array
var products = JSON.parse(localStorage.getItem("products") || "[]"); // the key is products
// Use localStorage.getItem('products') to retrieve any existing products from local storage.
// Since local storage stores data as strings, parse it with JSON.parse().
// Function to display products as cards
function displayProducts() {
    var productContainer = document.getElementById('user-product');
    productContainer.innerHTML = ''; // مسح المحتوى السابق
    for (var i = 0; i < products.length; i++) { // استخدام for العادية
        var product = products[i]; // جلب المنتج الحالي
        var card = document.createElement('div'); // إنشاء عنصر div جديد
        card.className = "product-card"; // تعيين كلاس CSS للبطاقة
        // ضبط محتوى البطاقة
        card.innerHTML = "\n            <h3>".concat(product.name, "</h3>\n            <p>").concat(product.description, "</p>\n            <p>Price: $").concat(product.price.toFixed(2), "</p>\n            <p>Quantity: ").concat(product.quantity, "</p>\n        ");
        // إضافة البطاقة إلى الـ div الرئيسي
        productContainer.appendChild(card);
    }
}
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name");
    var description = document.getElementById("des");
    var price = document.getElementById("price");
    var quantity = document.getElementById("qunt");
    var n = name.value;
    var d = description.value;
    var p = Number(price.value);
    var q = Number(quantity.value);
    // Create new product object with correct property names
    var newProduct = {
        name: n,
        description: d,
        price: p,
        quantity: q
    };
    products.push(newProduct); // add the new product to the array of products 
    localStorage.setItem('products', JSON.stringify(products)); // store the array in local storage and then convert it to string
    // Clear values form inputs
    name.value = '';
    description.value = '';
    price.value = '';
    quantity.value = '';
    // Update display
    displayProducts();
});
// Display products on page load
document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
});
