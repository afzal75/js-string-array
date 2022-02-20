function megaFriend(friends){
    if(Array.isArray(friends) == false) {    // array cheacking system..........
        return 'please provide an array of strings';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'shamol', 'sabbir'];
const myBigBuddy = megaFriend(1245);
// console.log(myBigBuddy);

// indexOf

if (friends.indexOf('Lion') != -1){
    // console.log('Lion exists');
}
// includes

if(friends.includes('Lion')) {
    console.log('lion exists using includes');
}

// concat 

const first  = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);