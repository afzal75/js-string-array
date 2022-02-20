function addNumbers (num1, num2) {
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        // console.log(num);
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 13, 50, 100, 545, 548, 547,438);
// console.log(sum);


function getFullName (firstName, lastName){
    // const fullName = firstName + ' ' + lastName;
    let fullName = '';
    for(part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk', 'songket', 'bin', 'Hanif', 'bin', 'tomuk', 'songket','bin', 'komuk','songket');
console.log(name);