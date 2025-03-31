let Myarr= [1,2,4,5,6,99,23];
Myarr.push(5)
Myarr.push(43)
console.log(Myarr)
Myarr.unshift(23); // add in start
console.log(Myarr);

console.log(Myarr.includes(4));
console.log(Myarr.indexOf(2))
const strofarr= Myarr.join()
console.log(strofarr)
console.log(typeof(strofarr))

// slice and splice
console.log(Myarr)
const arr=Myarr.slice(1,3) // 1st 3 elems
const arr2=Myarr.splice(1,3)
console.log(arr);
console.log(arr2);
console.log(Myarr)

// splice also remove that portion from the array it also manipulate the orignal array

// array part 2
const heros1= ['1st hero', '2nd hero ', '3rd hero ']
const heros2= ['dc hero1','dc hero 2', 'dc hero3']
heros1.push(heros2); // push on existing array
console.log(heros1)
// nested arrays ^ 
heros2[2] = 'its another hero'
console.log(heros1)
// reference is still there there for shallow copy is made 

const allheros= heros1.concat(heros2)
console.log(allheros); // will make them add seperatly but will also return the new array instead of updating the cold one 

// spread operator
const newheros2 = [...heros1, ...heros2, ...allheros]; // can add multiple in form of concat
// console.log(newheros2);

const arrayforflat= [1,2,4,5,6,[2,4,4,[1,3,3]],3,4]

console.log(arrayforflat.flat(0))
console.log(arrayforflat.flat(1))
console.log(arrayforflat.flat(2))
console.log(arrayforflat.flat(Infinity))
// flat (parameter) here the parameter is flatten to which dimension

const stringtoarr=Array.from("Hello thisis the string")
console.log(stringtoarr)