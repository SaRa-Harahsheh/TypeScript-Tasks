
//Task 1: Verify Interface Properties
//You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."/*

interface person{ Name:string , Age :number};
let Data: person = { Name: "Omar", Age: 17 };

function print()
{
if (Data.Age>18){
    console.log("Adult");
    
}
else{
    console.log("Minor");  
}

}
 print();
 


//  Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

interface Teacher { name: string , subjects: string[]}

function Subjects(teach: Teacher): void {
    console.log(`${teach.name} teaches:`);

    for (let i = 0; i < teach.subjects.length; i++) {
        console.log(teach.subjects[i]);  // طباعة كل مادة في المصفوفة
    }
}

let teach: Teacher = {name: "Ahmed",subjects: ["Mathematics", "Physics", "Chemistry"]};

Subjects(teach);


//Task 3: Modify Object in an Array of Interfaces
//You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// interface Product{ name:string , price :number,quantity:number};

// let DetailsProduct:Product[]=[{name:"Pizza", price:4 ,quantity:20},{name:"dawali", price:7 ,quantity:7}]


// for(let i=0;i<DetailsProduct.length;i++) 
//     {
// if (DetailsProduct[i].quantity>5){
//     DetailsProduct[i].price= DetailsProduct[i].price*0.85
// }
// console.log(DetailsProduct[i].price);

// }

//Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product and when you submit the form it will save the product inside array in the local storage and then display all the products as a cards under the form.
//*use interface to create a structure for this product



interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
  }
  
  
  // Load products from local storage or initialize as an empty array
  let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]"); // the key is products
  
  // Use localStorage.getItem('products') to retrieve any existing products from local storage.
  // Since local storage stores data as strings, parse it with JSON.parse().
  
  
  // Function to display products as cards

  function displayProducts() {
    const productContainer = document.getElementById('user-product') as HTMLDivElement;
    productContainer.innerHTML = ''; // مسح المحتوى السابق

    for (let i = 0; i < products.length; i++) { // استخدام for العادية
        const product = products[i]; // جلب المنتج الحالي
        
        const card = document.createElement('div'); // إنشاء عنصر div جديد
        card.className = "product-card"; // تعيين كلاس CSS للبطاقة

        // ضبط محتوى البطاقة
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Quantity: ${product.quantity}</p>
        `;

        // إضافة البطاقة إلى الـ div الرئيسي
        productContainer.appendChild(card);
    }
}

  
  let myForm = document.getElementById("myForm") as HTMLFormElement;
  
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    let name = document.getElementById("name") as HTMLInputElement;
    let description = document.getElementById("des") as HTMLInputElement;
    let price = document.getElementById("price") as HTMLInputElement;
    let quantity = document.getElementById("qunt") as HTMLInputElement;
  
    const n = name.value;
    const d = description.value;
    const p = Number(price.value); 
    const q = Number(quantity.value); 
  
  // Create new product object with correct property names
  const newProduct: Product = {
      name: n,
      description: d,
      price: p,
      quantity: q
  };
  
    products.push(newProduct) // add the new product to the array of products 
  
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
  document.addEventListener('DOMContentLoaded', () => {
      displayProducts();
  });


  