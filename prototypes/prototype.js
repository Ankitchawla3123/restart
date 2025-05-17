// let myname='ANKIT     ';
// console.log(myname.truelength);// un defined make it urself

let myarr= ['thor', 'spiderman', 'ultron'];
let power={
    thor: "thunder",
    spiderman: "sling",
    ultron: "robot",
    getspiderpower: function(){
        console.log("power is " , this.spiderman);  
    }
}

Object.prototype.Ankit= function(){
    console.log("SPY_D is omni present");
    
}

power.Ankit()
 
myarr.Ankit(); // array is also an object / top most level heirrachy 
// if I APPLY prototype to array will the object be able to access??

Array.prototype.Propertycheck= function(){
    console.log("This is the property check of prototype");
    console.log(this);
    
}

myarr.Propertycheck()


// power.Propertycheck() this will show an error is property is asigned to array specific or things which are buit on array, not object
// but arrray is type of an object so all the properties which are present in object are accessible by an array cuz object is at topmost level / base of everything



// INHERTIANCE

const user={
    name: 'my name',
    email: 'my email'
}

const objectcheck= {
    doescode : true,
}
const friends={
    isavail: false,
}

const Tasupport={
    makeassign: "js assignment",
    fulltime: true,
    __proto__ : friends // linkage
}

objectcheck.__proto__ = user; // thus only is inhertiance

// modern syntax

Object.setPrototypeOf(friends, objectcheck)// friends accessing all the properties of objectcheck

// TRUE LENGTH

let myname='ANKIT     ';
String.prototype.truelen = function(){
    console.log("trulen is ", this.trim().length);
    
}

myname.truelen();
"isk trulengn kitnti".truelen()



