// for of loop
// ["", " ", ""] or objects inside the array/list

const arr= [1,2,3,4,5]
for (const val of arr) {
    console.log(val);
    
}

const greetings= "Yo world";

for (const gree of greetings) {
    console.log(gree); // prints each character    
}

const map= new Map() // object/ new thing in js holds key value pair
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
console.log(map);
map.set('IN', 'Ind')
console.log(map); // updation / unique value cuz set

for (const key of map) {
    console.log(key); // returns an array of key value pair of the current val 
}

for (const [key,val] of map) {
    console.log(key); // destructure is done 
}

// for of will not work for the objects because objects aren't iterable i.e no such value of i=0 , i=1 etc meanwhile maps, list are iterable 

const myobject= {
    'game1': 'NFS',
    'game2': 'Spider Man',
    'game3': 'next game'
}
// for (const [key, game] of myobject) { // will not work / not iteratable 
//     console.log(`key = ${key} amd game = ${game} `);
    
// }

// introduction to for in 

for (const key in myobject) {
    console.log(key); // will print the keys
    console.log(`key = ${key} amd game = ${myobject[key]} `);
    
}

// map will not work in for in
