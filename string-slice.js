const anthem = 'Amar Sonar Bangla Ami Tomay Valobasi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);


// slice

const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr

const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring 

const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat 

const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc');
// console.log(fullString);


// join

const word = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = word.join('');
// const allJoined = word.join(' ');
// const allJoined = word.join(',');
// const allJoined = word.join(', ');
const allJoined = word.join('www');
console.log(allJoined);

