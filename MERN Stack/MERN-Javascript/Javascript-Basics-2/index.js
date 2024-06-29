console.log('MARK-80');

// Object 
// let rectangle = {
// Fields (Properties)
//     length: 1,
//     breadth: 2,

//Method (Behaviour)
//     draw: function () {
//         console.log('drawing');
//     }
// };

// rectangle.length;
// rectangle.draw();




//FACTORY FUNCTION

function createRectangle(len, bre) {
    // Object
    return rectangle = {
        length: len,
        breadth: bre,

        // User can also write function like this(line no.8)
        draw() {
            console.log('drawing reactangle');
        }

    };
}


// Calling/Invoke the Factory Function
// Here createRectangle() function store in the variable 'a'
// createRectangle(5, 4) for "Parsing" of the values
let rectangleObj1 = createRectangle(5, 4);
let rectangleObj2 = createRectangle(7, 3);
let rectangleObj3 = createRectangle(10, 12);




// CONSTRUCTOR FUNCTION  ---> (Initalize/Define properties and Methods)

function Rectangle() {

    this.length = 55;
    this.breadth = 40;

    this.draw = function () {
        console.log('Drawing');
    }
}

// Object create using "constructor function"
let rectangleObj = new Rectangle();

// Adding new property in Rectangle() function
rectangleObj.color = 'Yellow';
console.log(rectangleObj);

// delete rectangleObj.color;

delete rectangleObj.color;
console.log(rectangleObj);


// Primitive type 
let a = 10;

let b = a;
a++;
console.log(a);
console.log(b);


//Reference type or object
let c = {
    value: 20
};

let d = c;

c.value++;
console.log(c.value);
console.log(d.value);



let x = 50;

function inc(x) {
    x++;
}

inc(x);
console.log(x);


// PASS BY VALUE CONCEPT
// for primitive type
let p = 30;

function inc(p) {
    p++;
}

inc(p);
console.log(p);

// for reference type or object
let e = { value: 80 };

function inc(e) {
    e.value++;
}

inc(e);
console.log(e.value);



//********************************************************************//

// let square={
//     length:2,
//     bridth:3
// };

// For-in loop  ----> (User can acces all keys, values and key-value pair)
// Note: For-in loop is use on objects
// for(let key in square){
        // keys(properties) are reflected by key variable
        // values are reflected through square[key]
//     console.log(key,square[key]);
// }

// For-off loop
// Note: For-off loop is use on iterebles(array & Maps)
// for keys not their values
// for(let key of Object.keys(square)){
//     console.log(key);
// }

// for whole entries
// Object.entries(square) it made array of properties 
// for(let key of Object.entries(square)){
//     console.log(key);
// }

//*******************************************************************//

// Finding properties/methods

// if ('length' in Rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent')
// }




// OBJECT CLOANING
// Object Clone by iteration #1

// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = {};

// for (let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);


// Object Clone by assign #2

let src2={value:100};

let src={
    a:10,
    b:20,
    c:30
};

// Multiple object values passing to dest
let dest=Object.assign({},src,src2);

console.log(dest);

// For checking (here value of 'a' should not be incressed)
src.a++;
console.log(dest);


// Object Clone by spread #2


let srcc={
    a:100,
    b:200,
    c:300
};

let destt={...srcc};
console.log(destt);

src.a++;

console.log(destt);















