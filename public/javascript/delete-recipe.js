async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/recipes/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace(/dashboard/);
  } else {
    alert(response.statusText);
  }
}

// NEED TO CAPTURE DELETE-RECIPE BUTTON ELEMENT
document
  .querySelector(".delete-recipe")
  .addEventListener("click", deleteFormHandler);
