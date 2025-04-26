
let val; 
val= 5 ?? 10;
console.log(val);
// used for database suppose in 5 we had a varible which had value null (fron data base) so to avoid the issue
let val2= null ?? 12;
console.log(val2);

// terniary operator 
let price=20;
price>=10? console.log("price is okay"): console.log("price is not okay");

