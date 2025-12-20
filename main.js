// console.log('Hello World');
// console.error('This is an error');

//let,const

// let age = 30;
// age = 31;              // if we choose the 'let' we can change the value 
// console.log(age);

// const age = 30;
// age = 31;            // we always use const until unless we want to reassign the value.
// console.log(age);

// const score = 10;              //we always assign the value when we use const.
// console.log(score);

//string,numbers,boolean, null, undefined

// const name = 'John';          //string
// const age = 30;               //numbers
// const rating = 4.5;           //numbers
// const isCool = true;          //boolean
// const x = null;        //object it has null value so its typeof is object
// const y = undefined;         //undefined
// let z;                      //undefined

// console.log(typeof z);

//concatenation

// console.log('My name is ' + name + ' and i am ' + age);
// //Template String
// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);

// const s = 'technology, computwe, it , code';

// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(''));

// Arrays - variable that hold multiple values


// const fruits = ['apples' , 'oranges' , 'pears', 10,true];
//you can write multiple type in the same array.

// const fruits = ['apples' , 'oranges' , 'pears'];

// fruits[3] = 'grapes';  //add the element in the array
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();

// console.log(Array.isArray('hello'));     //check the element exist or not

// console.log(fruits.indexOf('oranges'));
// console.log(fruits);


// const person = {
//     firstName: 'John',
//     lastName : 'Doe',
//     age: 30,
//     hobbies: ['music' , 'movies' , 'sports'],
//     address: {
//         strret: '50 main st',
//         city: 'Boston',
//         state: 'MA',
//     }
// }

// console.log(person.firstName, person.lastName);

// console.log(person.hobbies[1]);

// console.log(person.address.city);


// const { firstName, lastName, address: {city}} = person;

// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person); // email is added.


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist apt',
//         isCompleted: false
//     }
// ]

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos); // convert into JSON string
// console.log(todoJSON);


//for
// for(let i = 0 ; i < todos.length ; i++){
//     console.log(todos[i].text);
// }

//while
// let i = 0;
// while(i<10){
//     console.log(`while loop number: ${i}`);
//     i++;
// }

// for(let todo of todos){
//     console.log(todo.id);
// }

//forEach, map, filter

// todos.forEach(function(todo) {      //sirf iterate krta hai
//     console.log(todo.text);
// })

// const todoText = todos.map(function(todo){        //har element pr operation krta hai 
//     return todo.text;
// })

// console.log(todoText);


// const todoCompleted = todos.filter(function(todo) {     //elements ko filter krta hai
//     return todo.isCompleted == true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);



// const x = 4;
// const y = 10;


// if(x > 5 && y>10) {   // '===' to match the types

//     console.log('x is more than 5 or y is more than 10');

// } 


// const x = 10;
 
// const color = x>10 ? 'red' : 'blue';   //terntary operator

// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');    
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;    
// }

// const addNums = (nums1 = 1, nums2 =1) => nums1 + nums2;
//     // return nums1 + nums2;

// console.log(addNums(5,5));


//constructor function

// function Person(firstName, lastName , dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);           //convert string into object
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }



//CLASS
// class Person {
//     constructor( firstName, lastName , dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); 

//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
        
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;

//     }
// }    

// //instantiate object
// const person1 = new Person('John' , 'Deo' , '4-3-1980');
// const person2 = new Person('Mary' , 'smith' , '3-3-1970');

// // console.log(person2.dob.getFullYear());

// console.log(person2.getFullName());

// console.log(person1);








