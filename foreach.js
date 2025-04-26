const arr=['Js', 'Rubby', 'Java', 'C++', 'Python']
// prototype has a lot of things in this in the above array object like length and other functions but one of them is foreach

arr.forEach( function (item) { // callback function 
    console.log(item);   
}) 

arr.forEach((yo, i ,fullarr)=>{
    console.log(yo, i); // i act as index in this automatically as 2nd parameter and 3rd parameter becomes the full array 
    // console.log(fullarr);
    
})

const newobject= [
    {
        Languagename:'java script',
        filename: 'js'
    },
    {
        Languagename:'java',
        filename: 'java'
    },
    {
        Languagename:'C++',
        filename: 'cpp'
    }, 
]
console.log();

newobject.forEach((item)=>{
    // item is the object now
    console.log(item.Languagename);
    
})