// let firstname = 'Akash';

// // let lastname=new String('  Kuber ');

// // let message= 'This is my first message';

// // let words=message.split(' ');
// // console.log(words);



// let message2 = 'This is \n my \n \'secound \' message'
// console.log(message2);



// // Takes string from another variable (Placeholder)
// // let mess=`hello

// // my name is

// // ${firstname}`
// // console.log(mess);

// // let date=new Date();
// // console.log(date);

// // let date2= new Date('nov 23 2001 07:28');
// // console.log(date2);

// // let date3= new Date(2001 ,10, 23, 7);
// // console.log(date3);

// // date3.setFullYear(2000);
// // console.log(date3);


// let numbers = [2, 77, 32, 58, 6, 4];

// console.log(numbers);


// // SEARCHING (for primitive)

// if (numbers.indexOf(4) != -1) {
//     console.log("Presenet");
// }

// console.log(numbers.includes(77));

// console.log(numbers.includes(23));

// // here user serching 77 and it will search from 58
// console.log(numbers.indexOf(77, 58));


// // SEARCHING (for objects)

// // let courses = [
// //     { no: 1, name: 'Akash' },
// //     { no: 2, name: 'Kartik' }
// // ];

// // Not possible by indexOf and includes method
// // console.log(courses.includes({no:1, name:'Akash'}));

// // console.log(courses);

// // Searching by call back function
// // let course = courses.find(function (course) {
// //     return course.name === 'Akash';
// // });

// // console.log(course);

// // Searching by arrow function


// // find the name of course (i.e. find(course => --> this course is a random name) which is strictley equal to 'Akash' 
// // let course= courses.find(course => course.name === 'Akash');

// // console.log(course);

// // REMOVING ELEMENT IN ARRAY

// let number = [1,2,3,4,5,6,7];
// console.log(number);

// // last number will delete
// number.pop();
// console.log(number);

// // first number will delete
// number.shift();
// console.log(number);

// Middle number(any) number will delete
// Here 2 is index position of the number and 1 is a how many you want to delete
// number.splice(2,1);
// console.log(number);


// // EMPTYING AN ARRAY

// let num=[11,12,13,14,15];

// // num=[];
// // num.length=0;
// //num.splice(0,num.length);
// console.log(num);


// COMBINATION AND SLICING OF ELEMENT

let first = [1, 2, 3];
let second = [4, 5, 6];

// let combined=first.concat(second);
// console.log(combined);

// combination by spread operator
let combined = [...first, 'a', 'b', ...second, 'akash', 'kuber'];
console.log(combined);

// copy created by this method
let another = [...combined];
console.log(another);

// // let sliced= combined.slice(2,4);
// // let sliced=combined.slice(2);
// // It will make the copy of whole array
// let sliced=combined.slice();
// console.log(sliced);


// ITERATION AN ARRAY   ---> Travelling from one index to another

// let arr=[10,20,30,40,50];

// // for(let value of arr){
// //     console.log(value);
// // }

// // by for each
// // arr.forEach(function(number){
// //     console.log(number);
// // });

// arr.forEach(number => console.log(number));


// JOINING AND SPLITING OF ARRAY


// let numbers=[10, 20, 30, 40, 50];

// // (',') i.e. on which basis user want to join
// let joined=numbers.join('-');
// console.log(joined);

// let message='this is my first message';
// let parts=message.split(' ');
// console.log(parts);

// SORTING OF AN ARRAY

// let numbers=[10, 30, 20, 60, 50];

// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// let number=[10, 12, 54, 60, 50];
// number.sort();
// console.log(number);



// FILTERING OF ARRAY

// let numbers = [1, 2, -1, -4];

// // let filtered = numbers.filter(function (value) {
// //     return value >= 0;
// // });

// // console.log(filtered);

// let filtered = numbers.filter(value => value >= 0);
// console.log(filtered);


// MAPPING OF ARRAY

// let number = [7, 8, 9, 10, 11];

// let items = number.map(function (value) {
//     return 'student_no' + ' ' + value;
// });

// console.log(items);

// let items = number.map(value => 'student_no' + ' ' + value);
//  console.log(items);


// MAPPING WITH OBJECTS

let number = [1, 2, -1, -4];

let filtered = number.filter(value => value >= 0);
console.log(filtered);


// {value:num} ---> Object Literal
// let items= filtered.map(function(num){
//     return {value:num};
// });

let items = filtered.map(num => { value: num });

console.log(items);





















