// DOM 101 Exercises

// 1. Add a Heading

const myHeading = document.getElementById('heading');
myHeading.innerHTML = "Toppings";

// 2. Add Class
const burgerItem = document.getElementById('burger');
burgerItem.classList.add('list-item');

// 3. Create and Append
// const list = document.getElementById('list');
// const newListItem = document.createElement('li');
// newListItem.innerHTML = "Fries";
// list.appendChild(newListItem);

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('THE DOM IS LOADED');
    const foodList = document.getElementById('list');
    const fries = document.createElement('li');
    fries.innerHTML = "Fries";
    foodList.appendChild(fries);
    fries.classList.add('list-item');
})