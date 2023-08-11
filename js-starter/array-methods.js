///////////////////////// ARRAY METHODS ///////////////////////

var cars = ['Jeep', 'Maybach','Porche','Volvo'];

cars[4] = 'Toyota';

console.log(cars);

// push/pop method. push method is used to append an array as seen below. the value will be added at the end 

cars.push('Maizda')
console.log(cars);

cars.push('Ford','TaTa');
console.log(cars);

// pop method is used to remove the last element in an array as seen below.

cars.pop();
console.log(cars);

cars.pop();
console.log(cars);


// unshift/shift method. unshift method is used to add to an array. the value is added at the beginning.

var Names = ['James','John','Jane','Cooper']
console.log(Names);

Names.unshift('Tim');
console.log(Names);

Names.unshift('Lola','Temmy');
console.log(Names);

//shift method removes items from the beginning

Names.shift();
console.log(Names);

// indexOf

console.log(Names.indexOf('John'));

// slice

var food = ['rice','beans','yam','egg','veggies','pasta','noddles','spaggs']
console.log(food);
var favFood = food.slice(2, 6);
console.log(favFood);


//////////////////////// ARRAY ITERATION ///////////////////////////

var food = ['rice','beans','yam','egg','veggies','pasta','noddles','spaggs'];

// for (var i =0; i < food.length; i++) {
//     console.log(food[i]);
// }

food.forEach(function(foodlist){
    console.log(foodlist);
});
