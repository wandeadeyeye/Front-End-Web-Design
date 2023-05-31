///////////////////////////// DOM MANIPULATION ///////////////////////////


var h1Element = document.querySelector('h1');

h1Element.style.textAlign = 'center';
h1Element.style.color = 'red';

var h3Element = document.querySelector('h3');

h3Element.style.textAlign = 'center';

var isYellow = false;
var bodyElement = document.querySelector('body');

setInterval(function () {
    if (isYellow) {
        bodyElement.style.background = 'white';
    } else {
        bodyElement.style.background = 'yellow';
    }
    isYellow = !isYellow
}, 1000);


////////////////////////// DOM SELECTION //////////////////////////


var selectWithID = document.getElementById('paragraph1');
console.log(selectWithID);

var selectWithClass = document.getElementsByClassName('newclass');
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName('p');
console.log(selectWithTag);

var selectWithQuery = document.querySelector('h1');
console.log(selectWithQuery);

var selectWithQueryID = document.querySelector('#paragraph1');
console.log(selectWithQueryID);

var selectWithQueryClass = document.querySelector('.newclass');
console.log(selectWithQueryClass);

var selectWithQueryAll = document.querySelectorAll('p')
console.log(selectWithQueryAll);

var selectWithQueryAllClass = document.querySelectorAll('.newclass')
console.log(selectWithQueryAllClass);


///////////////////////// MANIPULATION METHOD /////////////////////////


var selectToManipulate = document.querySelector('.newclass')

// selectToManipulate.style.background = 'red';
// selectToManipulate.style.height = '50px';
// selectToManipulate.style.width = '400px';
// selectToManipulate.style.fontSize = '50px';
// selectToManipulate.style.border = '2px solid black';

// selectToManipulate.classList.add('addPropeties');
// selectToManipulate.classList.remove('addPropeties')

selectToManipulate.classList.toggle('addPropeties')
selectToManipulate.classList.toggle('addPropeties')
selectToManipulate.classList.toggle('addPropeties')