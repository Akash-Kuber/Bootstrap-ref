// console.log('Muay Thai');


// EXAMPLE FOR CHECKING ASYNC FUNCTION
// setTimeout(function (){
//     console.log('third'); 
// },3000)

// function sync(){
//     console.log('First');
// }

// sync();
// console.log('second');



// PROMISE

// let meraPromise = new Promise (function (resolve, reject)
// {
//     setTimeout(function(){
//         console.log('I am inside Promise');
//     }, 5000);
//     // resolve(2233);
//     reject(new Error('Bhaisab Error ayya hai'))
// });

// console.log('Pehala');



// let meraPromise1 = new Promise (function (resolve, reject)
// {
//     setTimeout(function(){
//         console.log('I am inside Promise 1');
//     }, 3000);
//     // resolve(2233);
//     // reject(new Error('Bhaisab Error ayya hai'))
// });


// let meraPromise2 = new Promise (function (resolve, reject)
// {
//     setTimeout(function(){
//         console.log('I am inside Promise 2');
//     }, 5000);
//     // resolve(24);
//     reject(new Error('Bhaisab Error ayya hai'))
// });

// // meraPromise2.then((value) => {console.log(value)});

// // meraPromise2.catch((error) => {console.log("Recived an Error")});

// meraPromise2.then((value) => {console.log(value)}, (error) => {console.log("Recived an Error")});   


// EXAMPLE OF MULTIPLE PROMISE

// let waada1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     },3000);
//     resolve(true);
// })

// let output = waada1.then(() => {
//     let waada2 = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         }, 2000);
//         resolve("waada 2 resolved");
//     })
//     return waada2;
// })

// output.then((value) => console.log(value));




// ASYNC FUNCTION

// async function ABCD(){
//     return "Kya hua tera wada";
// }

// console.log(ABCD());



// async function utilityy() {

//     let delMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi is Hot");
//         },5000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hyderabad is cool");
//         },6000);
//     });


//     // Await function stops the parllel execution of functions (line 110 will not start until 109 not complete)
//     let dM = await delMausam;
//     let hM = await hydMausam;

//     return [dM, hM];

// }


// Fetch API


// Get call by fetch API

// let obj ={
//     heading:"head"
// }; 
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     // Converting content into jason
//     let output = await content.json();
//     console.log(output);
// }

// utility();


// Post (send) call by fetch API

// async function helper(){

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Akash',
//           body: 'Common man',
//           userId: 2001,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };

//       let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//       let response= content.json();
//       return response;
//     }

//     async function utility(){
//         let ans= await helper();
//         console.log(ans);
//     }

//     utility();


// CLOSURES

function outerfun (){
    let name="Akash";
    function innerfun (){
        console.log(name);
    }
    return innerfun;
}

let ans= outerfun();

ans();


