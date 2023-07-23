//first exercise

const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);

//second exercise

function outer() {
   var x = 10;
    function inner() {
        console.log(x);
    }
    x = 20;
    return inner;
}

var closureFunc = outer();
closureFunc(); // 20


//third exercise

function Person(name){
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}

var person = new Person('John');
var person2 = new Person('Mark');

person.greet();
person2.greet();