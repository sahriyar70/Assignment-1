
// problem 1 
//  If the input is a string → return the string in uppercase
//If the input is a number → return the number multiplied by 10
//If the input is a boolean → return the opposite value (true → false, false → true)


type  Valu = string|number|boolean; 
 
const formatValue = ( valu : Valu ):Valu =>{
    if ( typeof valu === "string"){
      return valu.toUpperCase()            //return the string in uppercase
    } else if ( typeof valu === "number"){
        return valu*10;                    // return the number multiplied by 10
    } else {
        return !valu;                      //return the opposite value (true → false, false → true)
    }
}


//Problem 2
//If the input is a string → return the number of characters
//If the input is an array → return the number of elements

const getLength = ( valu : string|any[]) :number =>{
    if ( typeof valu === "string"){
        return valu.length            //→ return the number of characters
    } else if (Array.isArray(valu)){
        return valu.length            //→ return the number of elements
    } else {
        return 0
    }
}


//Problem 3: 

//Create a Person class with name and age properties.
//  Add a method getDetails that returns a string with the person's name and age.

//Requirements:
//You must use a constructor to initialize the properties.
//The getDetails method should return a string in the format: "Name: [name], Age: [age]"

class Person {
    name : string ;
    age : number;
    constructor (name :string, age : number ){
        this.name = name 
        this.age = age
    }
    getDetails(){
     return  `Name:${this.name}, Age:${this.age}`
    }
}

//Problem 4: 
//Create a function filterByRating that accepts an array of items, 
// where each item has the following properties:

//title (string)
//rating (number between 0 and 5)
//The function should return a new array containing only the items with a rating of 4 or more

//Requirements:
//You must write the correct type for the function parameter and the return type
//Do not mutate the original array

type Item = {
    titel : string;
    rating : number;
}

 const filterByRating =(item : Item[] )=>{
    return item.filter((item)=>item.rating >=4)

 }

 //Problem 5:
 /*
 Create a function filterActiveUsers that accepts an array of user objects.
  Each user object contains id, name, email, and isActive properties. 
 The function should return a new array containing only the users whose isActive property is true

 */

 //Requirements:
 //You must write the correct type for the function parameter and the return type
 //Do not mutate the original array
 //Use type checking if necessary

  type User = {
    id : number;
    name : string;
    email : string;
    isActive : boolean;
  }

  const filterActiveUsers = (users:User[]):User[] =>{
        return users.filter((user)=>user.isActive === true);
  }


  
  //Problem 6:
  /*
  Define an interface Book with the following properties:

title (string)
author (string)
publishedYear (number)
isAvailable (boolean)
Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console
 in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

Requirements:
You must define the Book interface correctly.
The printBookDetails function must accept an object that follows to the Book interface.

  */

  interface Book {
    title : string;
    author : string;
    publishedYear : number;
    isAvailable : boolean;
  }
  const printBookDetails =(book:Book):string=>{          // useing string , কারন আমি  এখানে রিটারন করছি , Book দিলে রিটারন এর জায়গায়  consol.log করার লাক্ত, চাইলে অভাবেও করা জেত
    const availability = book.isAvailable ? "Yes" : "No";
    return  `"Title: ${book.title}, Author:${book.author}, Published: ${book.publishedYear}, Available: ${availability}"`
  } 


  /*
  Problem 7:
Create a function getUniqueValues that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

Requirements:
You must write the correct type for the function parameter and the return type.
The function should handle arrays of strings or numbers.
You are not allowed to use any built-in methods to solve this problem.

  */

const getUniqueValues = (arr1 : number[], arr2 :number[]):(number)[] =>{
    const result : (number)[] = [];
    for (let i = 0; i < arr1.length; i++) {
         let isduplicet = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i]===result[j]){
                isduplicet=true;
                break
            }
            
        }
        if(!isduplicet){
            result.push(arr1[i]);
        }
        
    }

    for (let i = 0; i < arr2.length; i++) {
        let isduplicet = false;
        for (let j = 0; j < arr2.length; j++) {
                if (arr2[i]===result[j]){
                isduplicet=true;
                break
            }
            
        }
        if(!isduplicet){
            result.push(arr2[i]);
        }
        
        
    }
         return result

}


/*
Problem 8:
Create a function calculateTotalPrice that accepts an array of product objects.
 Each product object contains the following properties:

name (string)
price (number)
quantity (number)
discount? (optional number, percentage between 0-100)
The function should return the total price of all products in the array,
 taking into account the discount for each product (if provided). If the array is empty, return 0.

Requirements:
You must write the correct type for the function parameter and the return type.
Use array methods (map, reduce, etc.) to calculate the total.
The total price of each product is calculated as: (price * quantity).
Correctly handle products with and without the discount property

*/

 interface Product {
    name : string;
    price : number;
    quantity : number;
    discount?: number;
 }

const calculateTotalPrice = (products : Product[]):number=>{
    if (products.length===0) return 0;
    const total = products.map((product)=> {
         const basePrice = product.price*product.quantity;
        if ( product.discount !== undefined){
                 const discountAmount = (basePrice*product.discount)/100;
            return basePrice-discountAmount;
        }
        return basePrice;
    })
    .reduce((sum,price)=>sum+price,0)

            return total

}



