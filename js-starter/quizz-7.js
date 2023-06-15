////////////////// QUIZZ - 7

var universities = [
    {
        Name: 'MIT',
        hasGone: true,
        year: 1882
    },
    {
        Name: 'Harvard',
        hasGone: false,
        year: 1739
    },
    {
        Name: 'Stanford',
        hasGone: true,
        year: 1849
    }
];

// if hasGone is true

universities.forEach(function (university) {
    if (university.hasGone === true) {
        console.log(university.Name + ' ' + university.year);
    } else {
        console.log(university.Name);
    }
});
