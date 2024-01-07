function renderOneFavorite(characterData) {
  const imageUrl =
    characterData.imageUrl ||
    `https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney`;

  // Crear el elemento li y asignar las clases y contenido
  const li = document.createElement("li");
  li.classList.add("favorites__li");
  li.innerHTML += `
      <img src="${imageUrl}" class="characters__img" alt="${characterData.name}">
      <h4 class="favorites__name">${characterData.name}</h4>
      <button class="favorites__btn js_btnRemove">Eliminar favorito</button>
    `;

  // Agregar el evento solo al botón dentro del nuevo li
  const btnRemove = li.querySelector(".js_btnRemove");
  btnRemove.addEventListener("click", (event) => {
    // Remover el li del DOM al hacer clic en el botón
    charactersListFavorites.removeChild(li);

    // Obtener la referencia al elemento correspondiente en charactersList
    const correspondingLiInCharactersList = charactersList.querySelector(
      `.js_character[data-id="${characterData._id}"]`
    );

    // Remover la clase "favorites__li" y agregar la clase "characters__li"
    if (correspondingLiInCharactersList) {
      correspondingLiInCharactersList.classList.remove("favorites__li");
      correspondingLiInCharactersList.classList.add("characters__li");
    }
  });

  // Agregar el li al contenedor utilizando appendChild
  charactersListFavorites.appendChild(li);
}
