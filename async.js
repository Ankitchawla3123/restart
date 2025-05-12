// timeouts and intervals
setTimeout(function(){
    console.log("timeout check 1");
},2000)

function functionhandlertype (str){
    console.log("timeout check 2, here the function is passed so no bracketss to be used as it will imideatily execute as handler is needed inside the settimeout");
    console.log(str);
    
}
setTimeout(functionhandlertype,2000,"parameter") // we can also pass the parameter of functions like this

