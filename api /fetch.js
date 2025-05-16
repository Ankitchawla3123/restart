// fetch learn

fetch("https://api.github.com/users/ankitchawla3123")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);  
})
.catch((error)=>console.log(error)
)

// when the status is returned 404 or 202 or something like that then it is the error code not the actual error to handled in catch

async function fetchtest() {
    try {
        const response= await fetch("https://api.github.com/users/ankitchawla3123")
    const data=await response.json();
    console.log("success",data);
    
        
    } catch (error) {
        console.log(error);
        
    }

}
fetchtest()

// headers
