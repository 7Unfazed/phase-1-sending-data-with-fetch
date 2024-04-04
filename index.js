function submitData(){
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
    name : "Steve",
    email : "steve@steve.com"
    }),
  };

  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const newId = object.id;
      const idElement = document.createElement("p");
      idElement.textContent = newId;
      document.body.appendChild(idElement);
    })
    .catch(function (error) {
      const errorElement = document.createElement("p");
      errorElement.textContent = "Bad things! Ragnarők!";
      document.body.appendChild(errorElement);
      console.log(error.message);
    });
}

submitData();

  
 