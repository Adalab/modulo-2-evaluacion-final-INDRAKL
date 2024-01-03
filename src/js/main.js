"use strict";

//QUERY SELECTORS

const charactersList = document.querySelector(".js_charactersList");
const charactersListFavorites = document.querySelector(
  ".js_charactersListFavorites"
);
const inputSearch = document.querySelector(".js_inputSearch");
const form = document.querySelector(".js_form");
const btnRemove = document.querySelector(".js_btnRemove");

//DATOS

let characters = [];
let charactersFavorites = [];

//FUNCIONES

//pinta uno

function renderOne(characterData) {
  const imageUrl =
    characterData.imageUrl ||
    "https://via.placeholder.com/210x295/flo/905/?text=Disney";
  charactersList.innerHTML += `
  <li class="characters__li js_character data-id="${characterData._id}">
    <img src="${imageUrl}" class="characters__img" alt="${characterData.name}">
    <h4 class="characters__name">${characterData.name}</h4>
  </li>`;
}

//pintar todos

function renderAll() {
  for (const character of characters) {
    renderOne(character);
  }
  const allCharacters = document.querySelectorAll(".js_character");
  for (const oneCharacter of allCharacters) {
    oneCharacter.addEventListener("click", handlefavorites);
  }
}

//pintar un favorito

function renderOneFavorite(characterData) {
  const imageUrl =
    characterData.imageUrl ||
    `https://via.placeholder.com/210x295/flo/905/?text=Disney`;
  charactersListFavorites.innerHTML += `
  <li class="characters__li js_character">
    <img src="${imageUrl}" class="characters__img" alt="${characterData.name}">
    <h4 class="characters__name">${characterData.name}</h4>
  </li>`;
}

//pintar todos los favoritos

function renderFavorites() {
  charactersListFavorites.innerHTML = "";
  for (const characterFavorite of charactersFavorites) {
    renderOneFavorite(characterFavorite);
  }
}

// función para agregar favoritos

function handlefavorites(event) {
  const clickedCharacterLi = event.currentTarget;
  const clickedCharacterId = clickedCharacterLi.dataset.id;
  const selectedCharacter = characters.find(
    (oneCharacter) => oneCharacter._id === parseInt(clickedCharacterId)
  );
  const favoritesCharacterIndex = charactersFavorites.findIndex(
    (onefavorite) => onefavorite._id === parseInt(clickedCharacterId)
  );
  if (favoritesCharacterIndex === -1) {
    //No esta en el array de favoritos. Lo pongo!

    charactersFavorites.push(selectedCharacter);
  } else {
    // La quito!!

    charactersFavorites.splice(favoritesCharacterIndex, 1);
  }
  renderFavorites();
  clickedCharacterLi.classList.toggle("favorites");
}

// EVENTOS

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`//api.disneyapi.dev/character?name=${inputSearch.value}`)
    .then((response) => response.json())
    .then((data) => {
      const searchResults = data.data;
      charactersList.innerHTML = "";
      charactersListFavorites.innerHTML = "";
      for (const result of searchResults) {
        renderOne(result);
      }
    });
});

btnRemove.addEventListener("click", (event) => {
  charactersListFavorites.classList.remove("favorites__li");
  charactersListFavorites.innerHTML = "";
});

//CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    characters = data.data;
    renderAll();
  });
