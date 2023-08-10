///////// QUIZ 4

///////// 1


var subtraction = function (x, y) {
    return y - x;
}

var result = subtraction(5, 9);
console.log(result);


///////// 2


function isOdd(number) {
    if (number % 2 !== 0) {
       return  false;
    } 
       return true;
}

var final = isOdd(5);
console.log(final);


//////// 3


var addition = function (num) {
    var res = 0;
    for (var i = 1; i <= num; i++) {
        res = res + i;
    }
    return res;
}

var addRes = addition(4);
console.log(addRes);
