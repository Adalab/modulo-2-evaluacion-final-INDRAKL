"use strict";

const charactersList = document.querySelector(".js_charactersList");

let characters = [
  {
    _id: 112,
    films: ["Hercules (film)"],
    shortFilms: [],
    tvShows: ["Hercules (TV series)"],
    videoGames: ["Kingdom Hearts III"],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
    name: "Achilles",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
    createdAt: "2021-04-12T01:31:30.547Z",
    updatedAt: "2021-12-20T20:39:18.033Z",
    url: "https://api.disneyapi.dev/characters/112",
    __v: 0,
  },
];

function renderOne(charactersData) {
  charactersList.innerHTML += `<ul><li><h3 class="characters__name">${charactersData.name}</h3>
    <img src="${charactersData.imageUrl}" class="characters__img" alt="${charactersData.name}"></li></ul>`;
}

renderOne(characters[0]);

// function renderOne(charactersData) {
//   charactersList.innerHTML += `
//       <li class="">
//         <h3>${charactersData.name}</h3>
//         <ul class="colors">
//         </ul>
//       </li>
//     `;
// }

// function renderAll() {
//   charactersList.innerHTML = "";
//   for (const eachCharacter of characters) {
//     renderOne(eachCharacter);
//   }
// }

// fetch("api.disneyapi.dev/character?pageSize=50")
//   .then((response) => response.json())
//   .then((data) => {
//     characters = data;
//     renderAll();
//   });
