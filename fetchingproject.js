

window.addEventListener('load',()=>{
    const cardDetails= document.getElementById("details-card");
    const params = new URLSearchParams(window.location.search);
    const id=params.get('id');
    if (!id) {
        displayContent();
        cardDetails.innerHTML = "ID not provided in URL.";
        return;
    }
    fetch(`${BASE_URL}/users/${id}`)
        .then(response =>{
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
                
            })
             
        
        .then(data => {
            
            const obj = data ;
            function objectTraversing(obj){
                for (const key in obj){
                    if(typeof obj[key]==="object" && obj[key]!==null){
                        cardDetails.innerHTML+=`<br><strong>${key}</strong><br>`;
                        objectTraversing(obj[key])
                    }
                    else{
                        cardDetails.innerHTML+=`<strong>${key} </strong>: ${obj[key]}<br>`;
                    }
                }
            }
            objectTraversing(obj);
            displayContent();
        })
        .catch(error => {
            console.error(error);
            displayContent();
            cardDetails.innerHTML="incorrect id";
        });
})

function displayContent(){
    const loadingScreen = document.querySelector(".loading");
    const contentScreen = document.querySelector(".content");

    loadingScreen.style.display = "none";
    contentScreen.style.display = "block";
}


