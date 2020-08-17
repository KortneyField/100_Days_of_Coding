const playlist = [
    'So What',
    'Respect',
    'What a Wonderful World',
    'At Last',
    'Three Little Birds',
    'The Way You Look Tonight'
  ];
  
  function createListItems (arrayToPass) {
    //creates an empty changable variable 
    let items = ''; 
    //iterates through the array that is passed
    for (let i = 0; i < arrayToPass.length; i++) {
      //creates li nodes with the pointed item in the array until loop is done.. 
      items += `<li> ${ arrayToPass[i] } </li>`;
    }
    //give backs the content that was created in the for loop. 
    return items; 
  }
  
  // connects to the html section main and will insert the content after the = 
  document.querySelector('main').innerHTML = 
    //Makes an order list
      //calls the function CreateListItems
        //Passes the Playlist array 
    `<ol> ${createListItems(playlist)} </ol> `; 