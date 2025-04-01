// nested objects

const object1= {
    email : "yo@gmail.com",
    fullname : {
        realfullname: {
            firstname : "yo",
            secondname : "hello",
        }
    }
}
console.log(object1.fullname.realfullname.firstname);

const obj1={ 1: "a ", 2:"b"}
const obj2= {3:"a", 4:"b"};
const obj3= {obj1, obj2} // array issue
const obj4 = {...obj1, ...obj2}
const obj5 = {1:"L"}
const obj6= {...obj1,...obj5, ...obj2}
console.log(obj3);
console.log(obj4);
console.log(obj6);

const obj7 = Object.assign({},obj1, obj2, obj3) // {} optional parameter
console.log(obj7);

const users=[{
    id:1 ,
    email : "abasd@gmail.com"
},
{
    id:2 ,
    email : "abasdasd@gmail.com"
}]

console.log(Object.keys(obj7)); // array data types
console.log(Object.entries(obj2))
console.log(obj2.hasOwnProperty(3))