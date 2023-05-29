////////////////////////// THIS KEYWORD //////////////////////


function addition(x, y) {
    console.log(x + y);
    console.log(this);
}

addition(10, 20);

var Raj = {
    Name: 'Raj',
    age: 21,
    hasGone: true,
    say: function () {
        console.log(this);
        console.log('say hi' + ' ' + this.Name);

        function someFun() {
            console.log(this);
        }
        someFun();
    }
};

Raj.say();