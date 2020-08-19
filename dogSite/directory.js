//makes an empty string variable 
let htmlBuilder = ''; 

//loops through the pets array and eventually adds html in the empty html string. 
for (let i =0; i <pets.length; i++) { 

    // pet variable is assigned to the object in the array. This is done to grab objects keys and values. 
  let pet = pets[i]; 
  
  // adding the following html to the html empty string
  htmlBuilder += `
    <h2> ${pet.name}</h2>
    <h3> ${pet.type} | ${pet.age}</h3> 
    <p> Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
  `; 
}

//calls the index.html page and inserts the html variable here. 
document.querySelector('main').innerHTML = htmlBuilder; 