const foodForm = document.getElementById('food-form');
const foodInput = document.getElementById('food-input');
const foodList = document.getElementById('food-list');

foodForm.addEventListener('submit', addFood);
foodList.addEventListener('click', deleteFood);

function addFood(event) {
  event.preventDefault();
  const foodText = foodInput.value.trim();
  if (foodText !== '') {
    const foodItem = document.createElement('li');
    foodItem.textContent = foodText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    foodItem.appendChild(deleteBtn);
    foodList.appendChild(foodItem);
    foodInput.value = '';
  }
}

function deleteFood(event) {
  if (event.target.classList.contains('delete-btn')) {
    const foodItem = event.target.parentElement;
    foodList.removeChild(foodItem);
  }
}