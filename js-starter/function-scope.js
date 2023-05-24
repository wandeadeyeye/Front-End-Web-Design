/////////////////// FUNCTION SCOPE //////////////////

var herName = function () {
    var Name = 'Tomtom';
    console.log(Name);
}

herName()
// console.log(Name);

var teamNumber = 30;
console.log(teamNumber);

function sport() {
    var number = 20;
    console.log(teamNumber);
}

sport();
// error
// console.log(number);


////////////////////////////

var sentence = 'Hello'

function myWord () {
    var sentence = 'Good Morning'
    console.log(sentence);
}

myWord();
console.log(sentence);

function newSentence() {
    var numbers = 30;
    newNumber();

    function newNumber() {
        var numbers = 20;
    }
}

