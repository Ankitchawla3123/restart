const newstring = "Hello my name is Ankit Chawla";
console.log(newstring.substring(6,11)); // cannot take negative value 


console.log(newstring.slice(-25,8));
 
console.log(newstring.replace('my','yo'));
console.log(newstring.includes("my"));

const tickoperatoruse= `this the new string used for tick operator here is the rest of the string ${newstring}`;
console.log(tickoperatoruse);

const newnumber=24
const string2= newnumber.toString();
console.log(typeof(string2));

console.log((5.4433*newnumber).toFixed(2)) // upto 2 decimal place always
const bignumber=1000000000;
console.log(bignumber.toLocaleString()); // US COMA SYSTEM
console.log(bignumber.toLocaleString('en-IN'))  //INDIAN COMMA SYSTEM 
console.log(Math.abs(-4));

const min=10;
const max=25;
console.log(Math.floor(Math.random()*(max-min+1))+min); //random number between the range of 2 values
