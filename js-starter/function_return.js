///////// FUNCTION RETURN ///////////

function cube(number) {
    // console.log(number * number * number);
    return(number * number * number);
}

var number = cube(5);

console.log(number);

function cube(number) {
    if (number === 25) {
        return 25;
    }
    return(number * number * number);
}

var number = cube(25);

console.log('this is another console', number);

/// CALCULATE AGE

function calculateAge(birthYear) {
    return 2023 - birthYear;
}

var age = calculateAge(1996);
console.log('you are', age, 'years old' );

/// AGE RESITICT CAFE

function cafe(age) {
    if (age < 18) {
        return 'sorry, you cant come in';
    }
    return 'come in please';
}

var age = cafe(20);
console.log(age);
