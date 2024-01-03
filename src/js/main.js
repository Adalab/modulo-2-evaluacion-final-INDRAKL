"use strict";

//QUERY SELECTORS

const charactersList = document.querySelector(".js_charactersList");
const charactersListFavorites = document.querySelector(
  ".js_charactersListFavorites"
);
const btnSearch = document.querySelector(".js_btnSearch");
const inputSearch = document.querySelector(".js_inputSearch");
const form = document.querySelector(".js_form");

//DATOS

let characters = [];
let charactersFavorites = [];

//FUNCIONES

function getImageUrl(characterData) {
  if (characterData.imageUrl !== undefined && characterData.imageUrl !== null) {
    return characterData.imageUrl;
  }
  return "https://via.placeholder.com/210x295/flo/905/?text=Disney";
}
function renderOne(characterData) {
  const imageUrl = getImageUrl(characterData);
  charactersList.innerHTML += `
    <li class="characters__li">
      <img src="${imageUrl}" class="characters__img" alt="${characterData.name}">
      <h4 class="characters__name">${characterData.name}</h4>
    </li>`;
}

function renderFavorite(characterData) {
  const imageUrl = getImageUrl(characterData);
  charactersListFavorites.innerHTML += `
    <li class="characters__li">
      <img src="${imageUrl}" class="characters__img" alt="${characterData.name}">
      <h4 class="characters__name">${characterData.name}</h4>
    </li>`;
}

function handleFavorite(event) {
  const clickedCharacter = event.currentTarget;
  clickedCharacter.classList.toggle("favorites");
  const selectedCharacter = characters.find(
    (oneCharacter) => oneCharacter.id === clickedCharacter.dataset.id
  );
  charactersListFavorites.innerHTML += `
        <li class="characters__li">
          <img src="${selectedCharacter.imageUrl}" class="characters__img" alt="${selectedCharacter.name}">
          <h4 class="characters__name">${selectedCharacter.name}</h4>
        </li>`;
}

function renderAll() {
  for (const character of characters) {
    renderOne(character);
  }
}

// EVENTOS

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`//api.disneyapi.dev/character?name=${inputSearch.value}`)
    .then((response) => response.json())
    .then((data) => {
      const searchResults = data.data;
      charactersList.innerHTML = "";
      for (const result of searchResults) {
        renderOne(result);
      }
    });
});

//CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    characters = data.data;
    renderAll();
  });
