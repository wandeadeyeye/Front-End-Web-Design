///////////////////// FUNCTION ARGUMENT ////////////////////////

function sayHi(name) {
    console.log('Hi' + ' ' + name);
}

sayHi('David');

function numbers(x, y) {
    if (x > y) {
        console.log('x is greater than y');
    }
}

numbers(20, 10);

function cube(number) {
    console.log(number ** 3);
}

cube(3);
cube(27);

//////////////////// RETURN KEYWORD ////////////////////

function square(number) {
    return (number ** 2);
}

var number = square(10);

console.log(number);

console.log(square(3));
console.log(square(27));


function numberr(num) {
    if (num === 25) {
        return 25;
    }
    return num ** 3
}

var result = numberr(25);

console.log(result);

function enterCafe(Age) {
    if (Age < 18) {
        return 'you cannot enter cafe';
    }
    return 'you can enter cafe';
}

console.log(enterCafe(17));