
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     document.body.appendChild(newElement);
// }


// PERFORMANCE CALCULARION

// let t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// let t4 = performance.now();

// console.log("It took" + (t4-t3) + " ms");




// let t3 = performance.now();

// let fragment = document.createDocumentFragment();

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);  // 1 Reflow, 1 Repaint

// let t4 = performance.now();
// console.log("It took" + (t4-t3) + " ms");