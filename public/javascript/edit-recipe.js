const ingredientsSection = document.querySelector("#edit-ingredients");
const addIngredientBtn = document.querySelector("#addIngredientBtn");

// Add ingredient card start
const addIngredient = function () {
  // Create div to ingredient input and delete button
  let ingredientCard = document.createElement("div");
  ingredientCard.className = "flex items-center w-full";

  // Create ingredient input
  let taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.name = "ingredients";
  taskInput.placeholder = "next ingredient";
  taskInput.className = "w-3/4 border-2 border-blue-300 p-1 my-2 mr-3";
  ingredientCard.appendChild(taskInput);

  // create delete button
  let deleteButton = document.createElement("img");
  deleteButton.src = "../images/svg/delete_btn.svg";
  deleteButton.className = "filter-blue h-9";
  deleteButton.id = "deleteBtn";
  ingredientCard.appendChild(deleteButton);

  ingredientsSection.appendChild(ingredientCard);
};
// Add ingredient card end

// Add direction card start
const addDirectionBtn = document.querySelector('#addDirectionBtn');
const directionSection = document.querySelector('#add-directions');

const addDirection = function () {
  // Create div to hold direction input and delete button
  let directionCard = document.createElement('div');
  directionCard.className = 'flex items-center w-full';

  // Create direction input
  let directionInput = document.createElement('textarea');
  directionInput.name = 'directions';
  directionInput.placeholder = 'Add new direction';
  directionInput.className = 'w-3/4 h-20 border-2 border-blue-300 p-1 my-2 mr-3';
  directionCard.appendChild(directionInput);

  // Create delete button
  let deleteButton = document.createElement('img');
  deleteButton.src = '../images/svg/delete_btn.svg';
  deleteButton.className = 'filter-blue h-9';
  deleteButton.id = 'deleteBtn';
  directionCard.appendChild(deleteButton);

  // Add input and delete button to direction card
  directionSection.appendChild(directionCard);
};

// Delete ingredient/direction handler start
const deleteBtns = document.querySelectorAll(".deleteBtn");

const deleteElement = function (e) {
  const parentDiv = e.path[2];
  const elToDelete = e.path[1];
  console.log(e.path[1]);
  console.log(e.path[2]);

  parentDiv.removeChild(elToDelete);
};
// Delete ingredient/direction handler end

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const category = document.querySelector("#category").value;
  const difficulty = document.querySelector("#difficulty").value;
  const ingredients = document.querySelector();
  const directions = document.querySelector();
  const time = document.querySelector();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      description,
      category,
      difficulty,
      ingredients,
      directions,
      time,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(/* */);
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#edit-recipe-form").addEventListener("submit", editFormHandler);
addIngredientBtn.addEventListener("click", addIngredient);
addDirectionBtn.addEventListener('click', addDirection);

// Watch each deleteBtn for click, delete selected element
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", deleteElement);
});
