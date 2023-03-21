var alex_grades = (90 + 80 + 95) / 3;

var sara_grades = (89 + 76 + 98) / 3;

var nancy_grades = (42 + 98 + 83) / 3;

console.log('Alex average grade:', alex_grades);
console.log('Sara average grade:', sara_grades);
console.log('Nancy average grade:', nancy_grades);

switch (true) {
    case (alex_grades < sara_grades && alex_grades < nancy_grades):
        console.log('alex has the least grades of the three');
        break;
    case (alex_grades > sara_grades && alex_grades > nancy_grades):
        console.log('alex has the most grades of them all');
        break;
    case (sara_grades < nancy_grades && sara_grades < nancy_grades):
        console.log('sara has the least grades of the three');
        break;
    case (sara_grades > nancy_grades && sara_grades > nancy_grades):
        console.log('sara has the most grades of them all');
        break;
    case (nancy_grades > alex_grades && nancy_grades > sara_grades):
        console.log('nancy has the most grades of them all');
        break;
    case (nancy_grades < alex_grades && nancy_grades < sara_grades):
        console.log('nancy has the least grades of the three');
        break;

    default:
        console.log('might be a tie');
        break;
}