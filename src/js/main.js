"use strict";

const charactersList = document.querySelector(".js_charactersList");

let characters = [];

function renderOne(charactersData) {
  charactersList.innerHTML += `
  <li class="characters__li">
    <img src="${charactersData.imageUrl}" class="characters__img" alt="${charactersData.name}">
    <h4 class="characters__name">${charactersData.name}</h4>
    </li>`;
}
function renderAll() {
  charactersList.innerHTML = "";
  for (const character of characters) {
    renderOne(character);
  }
}

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    characters = data.data;

    renderAll(characters);
  });
