var groceryItems = {
  items:  [
    {name:  "Celery",
     price:  2.00},
    {name:  "Milk",
     price:  4.00},
    {name:  "Bacon",
     price:  3.00},
    {name:  "Lettuce",
     price:  2.50},
    ],
},
listAllGrocery = function() {}


var totalItems = groceryItems.items;

for (var i=0; i<totalItems.length; i++) {
  console.log(totalItems[i].name + " " +totalItems[i].price);
  
  
};


var totalPrice = groceryItems.items;
var total = groceryItems.items.price;

for (var i=0; i < totalPrice.length; i++) {
    total = total + i;
    
};

console.log("Total " + total);