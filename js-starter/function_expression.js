////////////// FUNCTION DECLERATION AND EXPRESSION //////////////

// function calculateAge(birthYear) {
//     return 2023 - birthYear;
// }

// var age = calculateAge(2000);
// console.log('john is', age, 'years old');

var age = function (birthYear) {
    return 2023 - birthYear;
}

var calculateAge = age(2000);
console.log('He is', calculateAge, 'years old');

calculateAge = 'john';
console.log('His name is',calculateAge);

calculateAge = 'Tomi';
console.log('His middle name is',calculateAge);