async function deleteFormHandler(event) {
  event.preventDefault();
  let recipeId = event.path[3].id.split('-');
  recipeId = recipeId[1];

  const response = await fetch(`/api/recipes/${recipeId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace(/dashboard/);
  } else {
    alert(response.statusText);
  }
}

// NEED TO CAPTURE DELETE-RECIPE BUTTON ELEMENT
const deleteRecipeBtns = document.querySelectorAll('.delete-recipe');
deleteRecipeBtns.forEach(btn => {
  btn.addEventListener('click', deleteFormHandler);
});
