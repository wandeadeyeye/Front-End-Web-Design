//////////////// IF ELSE IF STATEMENT ///////////////////

var x, y;

x = 200;
y = 100;

if (x > y && y === '100') {
    console.log('you got this wrong');

} else if (x > y && y != 100) {
    console.log('this is incorrect');

} else if (x > y && y === 100) {
    console.log('this is correct');
    
} else {
    console.log('something is missing, go over it again');
    
}