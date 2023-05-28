//////////////////////// OBJECT METHODS ///////////////////////////

var John = {
    Name: 'John',
    age: 21,
    hasGone: true,
    year: 1882,
    say: function () {
        console.log('say hi Jane');
    }
}

var Jane = {
    Name: 'Jane',
    age: 25,
    hasGone: false,
    year: 1787,
    say: function () {
        console.log('say hi John');
    }
}

John.say();
Jane.say();

// function say() {
//     console.log('say hi Jane');
// }

// say();

// function say() {
//     console.log('say hi John');
// }

// say();