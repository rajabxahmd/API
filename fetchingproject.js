fetch(`https://jsonplaceholder.typicode.com/users/${id=1}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));