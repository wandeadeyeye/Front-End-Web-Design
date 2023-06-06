/////////////////// QUIZZ - 8 ////////////////////

var listItems = document.querySelectorAll('li');

for(var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(){
        this.style.color = 'white';
    }
)}
