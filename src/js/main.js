"use strict";

const charactersList = document.querySelector(".js_charactersList");
const charactersListFavorites = document.querySelector(
  ".js_charactersListFavorites"
);

let characters = [];
let charactersFavorites = [];

function renderOne(charactersData) {
  let imageUrl =
    charactersData.imageUrl ||
    "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";

  charactersList.innerHTML += `
      <li class="characters__li">
        <img src="${imageUrl}" class="characters__img" alt="${charactersData.name}">
        <h4 class="characters__name">${charactersData.name}</h4>
        </li>`;
}
function renderAll() {
  for (const character of characters) {
    renderOne(character);
    charactersList.addEventListener("click", handleFavorite);
  }
}

function handleFavorite(event) {
  const clickedCharacter = event.currentTarget;
  clickedCharacter.classList.toggle("favorites");
  const selectedCharacter = characters.find(
    (oneCharacter) => oneCharacter.id === clickedCharacter.dataset.id
  );
  charactersList.innerHTML += `
        <li class="characters__li">
          <img src="${selectedCharacter.imageUrl}" class="characters__img" alt="${selectedCharacter.name}">
          <h4 class="characters__name">${selectedCharacter.name}</h4>
        </li>`;
}

function renderFavorite(charactersData) {
  let imageUrl =
    charactersData.imageUrl ||
    "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";

  charactersListFavorites.innerHTML += `
    <li class="characters__li" data-id="${charactersData.id}">
      <img src="${imageUrl}" class="characters__img" alt="${charactersData.name}">
      <h4 class="characters__name">${charactersData.name}</h4>
    </li>`;
}

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    characters = data.data;

    renderAll(characters);
  });
