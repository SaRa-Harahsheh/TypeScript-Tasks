//task 6-3-2025


//task 1: Identify if a Number is Even or Odd

let num:number = 1;

if (num %2==0){
    console.log (`The ${num} is even`)
}
else 
{
    console.log(`The ${num} is odd`)
}

//task 2: Filter Expensive Products from an Array 

let PriceOfProduct : number[] = [100,200,150,300]
let threshold :number = 170;

for(let i=0;i<PriceOfProduct.length;i++)
{
if (PriceOfProduct[i]>threshold )
    console.log(PriceOfProduct[i]);
}



//task 3: Sum All Elements in an Array


let ArrayOfNum :number[]= [1,2,3,4,5]
let sum = 0;

 for(let i=0;i<ArrayOfNum.length;i++)
    {
sum =sum+ArrayOfNum[i]

 }
 console.log("The sum is " + sum);