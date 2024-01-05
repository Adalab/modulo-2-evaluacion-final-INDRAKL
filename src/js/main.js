"use strict";

//QUERY SELECTORS

const charactersList = document.querySelector(".js_charactersList");
const charactersListFavorites = document.querySelector(
  ".js_charactersListFavorites"
);
const inputSearch = document.querySelector(".js_inputSearch");
const form = document.querySelector(".js_form");

//DATOS

let characters = [];
const charactersFavorites = JSON.parse(localStorage.getItem("f")) || [];

//FUNCIONES

//pinta uno

function renderOne(characterData) {
  const imageUrl =
    characterData.imageUrl ||
    "https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney";

  const favoritesCharacterIndex = charactersFavorites.findIndex(
    (onefavorite) => onefavorite._id === parseInt(characterData._id)
  );

  if (favoritesCharacterIndex === -1) {
    charactersList.innerHTML += `
    <li class="characters__li js_character" data-id="${characterData._id}">
      <img src="${imageUrl}" class="characters__img" alt="${characterData.name}">
      <h4 class="characters__name">${characterData.name}</h4>
    </li>`;
  } else {
    charactersList.innerHTML += `
    <li class="favorites__li js_character" data-id="${characterData._id}">
      <img src="${imageUrl}" class="characters__img" alt="${characterData.name}">
      <h4 class="characters__name">${characterData.name}</h4>
    </li>`;
  }
}

//pintar todos

function renderAll(data) {
  for (const character of characters) {
    renderOne(character);
  }
  const allCharacters = document.querySelectorAll(".js_character");
  for (const oneCharacter of allCharacters) {
    oneCharacter.addEventListener("click", handlefavorites);
  }
}

//pintar un favorito

function renderOneFavorite(favoriteData) {
  const imageUrl =
    favoriteData.imageUrl ||
    `https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney`;
  charactersListFavorites.innerHTML += `
  <li class="favorites__li js_character">
    <img src="${imageUrl}" class="characters__img" alt="${favoriteData.name}">
    <h4 class="favorites__name">${favoriteData.name}</h4>
    <button class="favorites__btn js_btnRemove">Eliminar favorito</button>
  </li>`;
}

// const btnRemove = document.querySelectorAll(".js_btnRemove");
// btnRemove.addEventListener("click", (event) => {
//   const clickedCharacterId = clickedCharacterLi.dataset.id;
//   const favoritesCharacterIndex = charactersFavorites.findIndex(
//     (onefavorite) => onefavorite._id === parseInt(clickedCharacterId)
//   );
//   if (favoritesCharacterIndex !== -1) {
//     charactersFavorites.splice(favoritesCharacterIndex, 1);
//     renderFavorites();
//   }
// });

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
    charactersFavorites.push(selectedCharacter);
    localStorage.setItem("f", JSON.stringify(charactersFavorites));
  } else {
    charactersFavorites.splice(favoritesCharacterIndex, 1);
    localStorage.setItem("f", JSON.stringify(charactersFavorites));
  }
  renderFavorites();
  clickedCharacterLi.classList.toggle("favorites__li");
  clickedCharacterLi.classList.toggle("characters__li");
}

// EVENTOS

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`//api.disneyapi.dev/character?name=${inputSearch.value}`)
    .then((response) => response.json())
    .then((data) => {
      characters = data.data;
      charactersList.innerHTML = "";
      renderAll();
    });
});

//CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    characters = data.data;
    renderFavorites();
    renderAll();
  });
