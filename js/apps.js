const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];

const search = prompt('Search for a product.');

let message;

if (!search) {
  message = `Nothing was entered`; 
} else if (inStock.includes(search)){
  message = `<strong>${search.toUpperCase()}</strong> IN STOCK. It's #${inStock.indexOf(search) +1} on the list.`; 
} else { 
  message = `${search} NOT IN STOCK`; 
}

document.querySelector('main').innerHTML = `<p>${message}</p>`