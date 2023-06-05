/////////////////////////// EVENT HANDLERS /////////////////////////

var button = document.querySelector('#btn1');
var title = document.querySelector('.title');

button.addEventListener('click', function () {
    console.log('you click the button');
    title.style.background = 'red';
})

var unorderedList = document.querySelector('ul');

unorderedList.addEventListener('click', function(){
    console.log('you clicked this items');
    unorderedList.style.backgroundColor  = 'blue';
})

var listItem = document.querySelectorAll('.animal');

listItem.addEventListener('click', function(){
    listItem.style.color = 'white';
})