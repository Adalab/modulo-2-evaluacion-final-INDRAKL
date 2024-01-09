const btnRemove = document.querySelectorAll(".js_btnRemove");

function handleRemove(event) {
  const clickedRemoveBtn = event.currentTarget;
  const clickedRemoveId = clickedRemoveBtn.dataset.id;
  const favoritesCharacterIndex = charactersFavorites.findIndex(
    (onefavorite) => onefavorite._id === parseInt(clickedRemoveId)
  );

  if (favoritesCharacterIndex !== -1) {
    charactersFavorites.splice(favoritesCharacterIndex, 1);
    renderFavorites();
    clickedCharacterLi.classList.remove("favorites__li");
  }
}

btnRemove.forEach((btn) => {
  btn.addEventListener("click", handleRemove);
});
