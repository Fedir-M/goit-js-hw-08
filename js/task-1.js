//* Variant 1

// const itemsCategories = document.querySelectorAll(".item");
// console.log(itemsCategories);

// console.log(itemsCategories.length);
// console.log([...itemsCategories]);

//* Variant 2
const itemsCategories = document.querySelector("#categories");

const itemArray = [...itemsCategories.children];

console.log('Numbers of categories: ', itemArray.length);

itemArray.forEach(el => {  
  const title = el.firstElementChild.textContent;
  
  console.log('Category: ', title);

  const itemsList = el.lastElementChild.children;
  console.log('Elements', itemsList.length);  
})

