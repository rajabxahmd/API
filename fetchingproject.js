const cardDetails= document.getElementById("details-card");
const id=1;
fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(data => {
        const obj = data ;
        function objectTraversing(obj){
            for (const key in obj){
                if(typeof obj[key]==="object" && obj[key]!==null){
                    cardDetails.innerHTML+=`<br>${key}<br>`;
                    objectTraversing(obj[key])
                }
                else{
                    cardDetails.innerHTML+=`${key} : ${obj[key]}<br>`;
                }
            }
        }
        objectTraversing(obj);
    })
    .catch(error => {
        console.error(error)
        cardDetails.innerHTML="error fetching data"
    });