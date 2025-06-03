// 1.Task: Array Filtering and Mapping
// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
    { name: 'John', age: 30, gender: 'male' },
    { name: 'Jane', age: 25, gender: 'female' },
    { name: 'Bob', age: 35, gender: 'male' },
    { name: 'Alice', age: 28, gender: 'female' },

 ]
 const maleNames = people.filter(person => person.gender === 'male').map(person => person.name)
//  console.log(maleNames)


//  2.Task: Object Manipulatio

// -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
    { title: 'Kela', author: 'Kela', year: 1960 },
    { title: 'Mela', author: 'Mela', year: 1949 },
    { title: 'Sharabela', author: 'Bela', year: 1925 },
    { title: 'Mami', author: 'Mama', year: 1951 },
            
]
const bookTitles = books.map(book => book.title)
// console.log(bookTitles)

// 3.Task: Function Composition
// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const SqureNumber = (x) =>  x * x
const DoubleNumber = (x) =>  x * 2 
const AddFive = (x) =>  x + 5 


const NewFunction = x =>  AddFive(DoubleNumber(SqureNumber(x)))

const result = NewFunction(1)


// console.log(result)

// 4.Task: Sorting Objects
// -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Civic', year: 2020 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
    { make: 'BMW', model: 'X5', year: 2021 },
            
]
cars.sort((a,b) => a.year - b.year)
// console.log(cars)

// 5.Task: Find and Modify
// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Alice', age: 28 },
            
]
const findPerson = (name,age) => {
   const person = persons.find(person => person.name === name)
   if(person){
    person.age = age
   }
   return person
}

// console.log("🚀 ~ person:", findPerson('John',100))


// 6.Task: Array Reduction
// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Sum =()=>{
    return numbers.reduce((prev,curr) => prev + curr,0)
}
// console.log('sumValue',Sum())

// 8. Task: Unique Values
// -Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbersWithDuplicates = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1, 9, 10]
const uniqueNumbers =()=> [...new Set(numbersWithDuplicates)]
console.log("🚀 ~ uniqueNumbers:", uniqueNumbers())


