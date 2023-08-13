// TERNARY OPERATOR

var grades = 50;

grades < 40
    ? console.log('sorry, you will retake the class') 
    : console.log('you can move to the next stage')

var result = grades < 40 ? 'failed' : 'success';
console.log(result);

if (grades < 40) {
    result = 'failure'
}else {
    result = 'success'
}
