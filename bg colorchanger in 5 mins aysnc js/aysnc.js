let startbutton=document.getElementById('ID1')
let stopbutton= document.getElementById('ID2')
// or use
// document.querySelector('. for class and # for id')

const randocolor=()=>{

    const hex='0123456789ABCDEF';
    let color='#'
    for (let i = 0; i <6; i++) {
        color+= hex[Math.floor(Math.random()*16)];
    }
    return color
}

let intervalid

function bgchangerandom(){
    let body=document.body
    intervalid=setInterval(changecolorininterval,1000)
    function changecolorininterval(){
        body.style.backgroundColor=randocolor()
    }
}

function stopthechange(){
    clearInterval(intervalid)
}

startbutton.addEventListener('click',bgchangerandom)
stopbutton.addEventListener('click', stopthechange)
