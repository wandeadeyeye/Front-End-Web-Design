/* QUIZ 3. odd numbers between 132 and 148 */

for (var number = 132; number <= 148; number++) {
    if (number % 2 !== 0) {
    console.log(number);   
    }
    
}

/*  QUIZ 4. Numbers between 25 and 100, divisible by 5 and 7 */

for (var number = 25; number <= 100; number++) {
    if (number % 7 === 0 && number % 5 === 0) {
    console.log(number);  
    }
    
}