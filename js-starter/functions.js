///////// FUNCTIONS ////////

function sayhello() {
    console.log('Hello, world!');
}

sayhello();


function dosomthing() {
    console.log('Good Morning');
    console.log('Good Afternoon');
    console.log('Good Evening');
}

dosomthing();
dosomthing();
dosomthing();
dosomthing();

// FUNCTIONS WITH ATTRIBUTE

function sayhi(name) {
    console.log('Hi' + ' ' + name);
}

sayhi('John');
sayhi('Tim');


function math(length, height) {
    console.log(length * (length / height));
}

math(4, 7);

function cube(number) {
    console.log(number * number * number);
}

cube(3);