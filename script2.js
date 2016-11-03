var total = 0;
var groceryItems = [
    
    {name:  "Celery",
     price:  2},
    {name:  "Milk",
     price:  4},
    {name:  "Bacon",
     price:  3},
    {name:  "Lettuce",
     price:  2.5},
  
];


for (var i=0; i < groceryItems.length; i++) {
  
  total += groceryItems[i].price;
  
  console.log(groceryItems[i].name + " " + groceryItems[i].price);
  
  
}

console.log("Total " + total.toFixed(2));
