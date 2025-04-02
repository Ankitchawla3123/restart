function newfunction(abc){
    if (!abc) {
        return "enter the parameter"
    }
    return `${abc} helooo hasdhasd `
}
console.log(newfunction('sdfsdf'));
console.log(newfunction()); // undefined

function newfunction2(...num){ /// act as rest operator depends on use case
    return num
}

console.log(newfunction2(220,131,12)); // array 
function newfunction23(val1,val2,...num){ /// act as rest operator depends on use case
    return num
}
console.log(newfunction23(220,131,12)); // array 
console.log(newfunction23(12)); // array 

function handleobject (anyobject){
    console.log(`user name is ${anyobject.username} and nice is ${anyobject.nice}`)
}

const user={
    username: "Ankit",
    nice: 132,
}
const user2={
    username: "Ankit",
    nices: 132,
}
handleobject(user)
handleobject(user2)
handleobject({username:"SPY_D",
    nice:"new nice"
})

const newarray= [200,400,100,600]

function printsecondvalue(arr){
    return arr[1]
}
console.log(printsecondvalue(newarray));


