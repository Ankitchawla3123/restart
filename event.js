// this is the new event for learninf event

// document.getElementById('owl').onclick = function(){
//     alert("event used");
// }


// document.getElementById('owl').addEventListener('click', function(){
//     console.log("event fired")
// }) // by default is false and why it is used the third para mater 


//attach event  old event listener
document.getElementById('owl').addEventListener('click', function(e){
    console.log(e)// here the event is transfered and all the events get displayed also get the enviornment events
    e.preventDefault() // stops the default behaviour of the events in the browser
    
}) 

// event propogration 

// bubbling and capturing 

// if i keep the last value that is true / or false as true then the parent event if associated will be clicked first after that only other events will respond that is capturing but by deault it is false this means top most will be clicked 1st 
// now if i do e.stopPropagation() then it will click the top most element then will go down after this

