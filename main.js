// Question No. 1

// Declare and initialize an empty multidimensional array.
// (Array of arrays)

let multidimensionalEmptyArray = [];


// Question No. 2

// Declare and initialize a multidimensional array
// representing the following matrix:

let multidimensionalArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 2]
];

for (let row of multidimensionalArray) {
    document.write(row.join(' , ') + " <br>");
}


// Question No. 3

// Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
    
}


// Question No. 4

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let tableInput = +prompt("Enter a number to show its multiplication table");
let lengthInput = +prompt("Enter length multiplication table");

for (let i = 1; i <= lengthInput; i++) {
    document.write(`${tableInput} x ${i} = ${i * tableInput}<br>`);
    
}

// Question No. 5

// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for (let fruit of fruits) {
    document.write(fruit + "<br>");
}

for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at ${i} is ${fruits[i]}<br>`);
    
}

// Question No. 6

// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15


let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write("<h1>Counting</h1>");
document.write(counting.join(", "));


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k