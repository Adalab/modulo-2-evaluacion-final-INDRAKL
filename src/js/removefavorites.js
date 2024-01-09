const btnRemove = document.querySelectorAll(".js_btnRemove");

function handleRemove(event) {
  event.preventDefault();
  const clickedRemoveBtn = event.currentTarget;
  console.log(clickedRemoveBtn);
  const clickedRemoveId = clickedRemoveBtn.dataset.id;
  console.log(clickedRemoveId);
  const favoritesCharacterIndex = charactersFavorites.findIndex(
    (onefavorite) => onefavorite._id === parseInt(clickedRemoveId)
  );
  if (favoritesCharacterIndex !== -1) {
    charactersFavorites.splice(favoritesCharacterIndex, 1);
    renderFavorites();
    renderAll();
  }
  localStorage.setItem("f", JSON.stringify(charactersFavorites));
}
