// 
// document.querySelector('input') select 1st input dom 
// document.querySelector('.hello') select 1st with class hello
// document.querySelector('#yo')  select the one with id
// document.querySelector('input[type="password"]')  select the 1st one with password field
// document.querySelectorAll()  this will return the NodeList not an array these are not pure array //check properties/ prototypes and check wether maps and other functions are available or not
// document.getElementById  this will return all inform of HTML collection not an array
// document.getElementsByClassName this will return all inform of HTML collection not an array

// Array.from(nodelist or html collection)

//---------------------------------------------------------------------------------------------------

// SCENARIO 
// suppose our structure looks something like this 
// that we have one div with class name as parent which is having 4 div's inside them
// so to access all the childrens we can do soemething like this

// const parents=document.querySelector(".parent")
// parents.children returns the HTML collection (not an array)


// const randomelement= document.querySelector(".day1") 
// randomelement.parentElement;
// randomelement.nextElementSibling;
// parent.childNodes returns the nodelist also have comments line break all the things inside the docx are included

// ---------------------------------------------------------------------

//  USED TO ATTACH DIV INSIDE THE DOM

// const div=document.createElement('div')
// div.innerHTML="Hey how are you?"
// div.className="newclass"
// div.id="newid"
// div.setAttribute('title','generated title') 
// div.style.backgroundColor="green"
// document.body.appendChild(div) 