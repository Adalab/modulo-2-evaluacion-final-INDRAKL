const btnRemove = document.querySelectorAll(".js_btnRemove");

/**
 * Elimina un personaje de la lista de favoritos al hacer click en un botón.
 * Guarda las actualizaciones en el almacenamiento local.
 * @param {event} event - El evento click.
 * */

function handleRemove(event) {
  event.preventDefault();
  const clickedRemoveBtn = event.currentTarget;
  const clickedRemoveId = clickedRemoveBtn.dataset.id;
  const favoritesCharacterIndex = charactersFavorites.findIndex(
    (onefavorite) => onefavorite._id === parseInt(clickedRemoveId)
  );
  if (favoritesCharacterIndex !== -1) {
    charactersFavorites.splice(favoritesCharacterIndex, 1);
    localStorage.setItem("f", JSON.stringify(charactersFavorites));
    renderFavorites();
    renderAll();
  }
}
