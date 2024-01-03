"use strict";

const charactersList = document.querySelector(".js_charactersList");

let characters = [];

function renderOne(charactersData) {
  charactersList.innerHTML += `
      <li class="">
        <h3>${charactersData.name}</h3>
        <ul class="colors">
        </ul>
      </li>
    `;
}

function renderAll(data) {
  charactersList.innerHTML = "";
  for (const eachCharacter of characters) {
    renderOne(eachCharacter);
  }
}

fetch("api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    characters = data;
    renderAll();
  });
