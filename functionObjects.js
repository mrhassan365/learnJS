/* As mentioned, functions are objects. You can work with functions as if they were objects. 
For example, you can assign functions to variables, to array elements, and to other objects. 
They can also be passed around as arguments to other functions or be returned from those functions. 
The only difference with objects is that functions can be called. */

function message() {
    console.log("Greetings Linda!");
}

console.log(typeof message);               // => function
console.log(message instanceof Object);    // => true


/* We see that a function is indeed an object. JavaScript functions are a special type of objects, 
called function objects. A function object includes a string which holds the actual code -- the function body 
-- of the function. The code is literally just a string. Although not recommended, you can create a new function 
object by passing the built-in Function constructor a string of code, like so: */

var body = "return Math.PI * radius * radius";
var circle = new Function("radius", body);

console.log(circle(5));          // => 78.5398..

/* You can also create a new function with a custom constructor function (remember that by convention a constructor 
function always starts with an upper-case letter). In the code below we have a Book constructor function that is used 
to create book instances. In the constructor function we are assigning a function object to the getDetails property. */

function Book(type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function () {
        return this.type + " written by " + this.author;
    }
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails());        // => Fiction written by Peter King


/* My own function object using the built in Function constructor: */

const funcBody = "return num * num";
const squared = new Function("num", funcBody);

console.log(squared(3));

const funcBody2 = "console.log(num/2)";
const half = new Function("num", funcBody2);

half(4);

/* My own function object by creating a custom Function constructor: */

function Pay(grossPay){
    this.grossPay = grossPay;
    this.netPay = function () {
        return (this.grossPay * .62)
    }
}

const pay = new Pay(100000);
console.log(pay.netPay());





