/////////////////////////////// OBJECTS ////////////////////////


////// arrays

var student1 = ['Kobe', 31, 'Havard'];

var student2 = [25, 'MIT', 'Fitz'];

console.log(student1[0]);
console.log(student2[2]);


////////// objects 

var schoolName = 'school';

var student3 = {
    Name: 'John',
    age: '22',
    school: 'NYU'
};

var student4 = {
    Name: 'Jane',
    school: 'Stanford',
    age: '29'
};

console.log(student3['age']);
console.log(student4.school);


console.log(student3.schoolName);
console.log(student3[schoolName]);


////////////// object upate.

var John = {
    Name: 'John',
    school: 'Howard',
    age: 19
}

John.age += 3;
console.log(John.age);

John['school'] = 'IIT';
console.log(John.school);

var studentID = {
    Name: 'Henry',
    age: 25,
    school: 'NYU',
    friendList: ['Tom', 'Jason', 'Jack','Jane', 'Sammy'],
    bestFriend: {
        Name: 'Jane',
        birthYear: 1999,
        school: 'NYU'
    }

}

console.log(studentID.bestFriend.birthYear);
console.log(studentID.friendList[3]);


///////////////// HOW TO ADD PROPERTY TO OBJECTS

var colors = {};

colors.yellow = {code: 123};
console.log(colors.yellow);

colors.black = {code: [3, 5, 1]};
console.log(colors.black.code[2]);

var blogPosts = [
    {
        Name: 'food',
        comment: 'i love good food'
    },
    {
        Name: 'game',
        comment: 'i am not a gamer'
    },
    {
        Name: 'cars',
        comment: 'i love a nice car collection',
        type: ['volvo', 'supra', 'jeep', {
            maker: 'mercedes',
            year: 2022,
            class: 'c',
            color: 'black',
            condition: 'new'
        }]
    }
];

console.log(blogPosts[1]);
console.log(blogPosts[2].comment);
console.log(blogPosts[2].type[0]);
console.log(blogPosts[2].type[3].condition);