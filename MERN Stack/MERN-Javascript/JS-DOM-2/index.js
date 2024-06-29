// console.log("Leo");


// let content = document.querySelector('#para1');
// // user can write any word in the position of word event like akash, tree
// content.addEventListener('click', function(event){
//     console.log(event);
// });



// THE DEFAULT ACTION

// let links = document.querySelectorAll('a');

// let thirdlink = links[2];

// // prevent default method

// thirdlink.addEventListener('click', function(akash){
//     akash.preventDefault();
//     console.log('It will not run');
// });


// AVOID TO MANY EVENTS

// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = ' This is para' + ' ' + i;

//     newElement.addEventListener('click', function(event){
//         console.log('You have clicked on paragraph');
//     });

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);



// let myDiv = document.createElement('div');

// function paraStatus (event){
//     // event.target 
//     console.log('yes' + event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = ' This is para' + ' ' + i;
//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('You clicked on span' + event.target.textContent);
    }
});


