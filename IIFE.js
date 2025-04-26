// IMMEDIATELY INVOKED FUNCTION EXPRESSION 

(function newfunc(){
    console.log("checked/ db connected");
    
})() ; // must end with semi colon if we don't  it will cause error in IIFE
// newfunc();
// how to avoid pollution from global scope

((name)=>{
    console.log("another connected ");
    console.log(name);
    
    
})("this is name") // will not work   