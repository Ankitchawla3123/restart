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


