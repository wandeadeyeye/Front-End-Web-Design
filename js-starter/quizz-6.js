/////////////////// QUIZZ - 6 ///////////////////////


///////// 1

var numbers = [];

for (var i = 0; i <= 20; i++) {
    numbers.push(i) 
}


///////// 2

console.log(numbers);

numbers.forEach(function(numbers){
 if (numbers % 5 === 0) {
    console.log(numbers);
 }
})