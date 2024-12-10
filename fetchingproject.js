const cardDetails= document.getElementById("details-card")
fetch(`${BASE_URL}/${id=1}`)
    .then(response => response.json())
    .then(data => cardDetails.textContent=data)
    .catch(error => console.log(error));