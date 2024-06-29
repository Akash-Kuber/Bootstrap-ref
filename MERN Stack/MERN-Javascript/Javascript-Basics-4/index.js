// console.log('Mark-50');



// // Function Decleration
// function run() {
//     console.log('Running');
// }

// run();


// // FUNCTION ASSIGNMENT
// let stand = function walk() {
//     console.log("Walking");
// }

// stand();


// // Named function assignment
// let stand2 = function sit() {
//     console.log('sitting');
// }

// stand2();

// // Anonymous funciton assignment
// let stand3 = function () {
//     console.log('anonymous function');
// }

// stand3();


// // assigning one function to another for use
// let drink = stand3;
// drink();




// let x = 1;
// x = 'a';
// console.log(x);


// For understanding the argument
// // function sum(a, b) {
// //     // (arguments) it stores extra numbers
// //     console.log(arguments);
// //     return a + b;
// // }

// // console.log(sum(20, 20));
// // console.log(sum(10));
// // console.log(sum());
// // console.log(sum(20, 20, 50, 2, 52));

// // let ans= sum(1,2,3,4,5);



// // Argument (Special Object)   --> it stores all assigned value 
// // user can add multiple numbers at a time without parsing it in a function name i.e. (sum())
// function sum(){
//     let total=0;
//     for(let value of arguments)
//     // total = total + value;
//     total+=value;
//     return total;
// }

// let ans= sum(1,55,3,7);
// console.log(ans);


// function mul(){
//     let total=1;
// Focous on word "of" --> It is only
//     for(let value of arguments)
//     total = total * value;
//     return total;
// }

// let ans2=mul(2,3,1,4,1);
// console.log(ans2);


// REST OPERATOR (...)

// function sum (num, val, ...args){
//       console.log(args);
// }

// sum(1,2,3,5,8,6,5);

// DEFAULT PARAMETER
// in default parameter where user put default value so from this value 
// they are also asiigned by default parameter --> (RULE)

function interest(p, r = 6, y = 10) {
    return p * r * y / 100;
}

console.log(interest(1000,));



// PLACEHOLDER --> read only function

// function fullName(){
//     return `${person.fName}    ${person.lName}`;
// }

// console.log(fullName());





// GETTER & SETTER WITH TRY AND CATCH BLOCK

let person = {
    fName: 'akash',
    lName: 'kuber',

    //This is not a function
    get fullName() {
        return `${person.fName}   ${person.lName}`;
    },

    //This is not a function
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error("You have not send a string");
        }
        let parts = value.split(' ');
        // Note: now parts is converted into array 
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

try {
    person.fullName = true;
}
catch (e) {
    alert(e); 
}

console.log(person.fullName);



// REDUCING AN ARRAY

let arr = [1, 2, 3, 4]

// let total = 0;
// for (let value of arr)
// total = total + value;

// console.log(total);


let Total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(Total);





























