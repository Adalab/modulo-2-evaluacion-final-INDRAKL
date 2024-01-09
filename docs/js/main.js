document.querySelectorAll(".js_btnRemove");function m(e){e.preventDefault();const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s);const n=r.findIndex(a=>a._id===parseInt(s));n!==-1&&(r.splice(n,1),d(),l()),localStorage.setItem("f",JSON.stringify(r))}const i=document.querySelector(".js_charactersList"),f=document.querySelector(".js_charactersListFavorites"),h=document.querySelector(".js_inputSearch"),_=document.querySelector(".js_form");let c=[];const r=JSON.parse(localStorage.getItem("f"))||[];function u(e){const t=e.imageUrl||"https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney";r.findIndex(n=>n._id===parseInt(e._id))===-1?i.innerHTML+=`
    <li class="characters__li js_character" data-id="${e._id}">
      <img src="${t}" class="characters__img" alt="${e.name}">
      <h4 class="characters__name">${e.name}</h4>
    </li>`:i.innerHTML+=`
    <li class="favorites__li" data-id="${e._id}">
      <img src="${t}" class="characters__img" alt="${e.name}">
      <h4 class="characters__name">${e.name}</h4>
    </li>`}function l(){i.innerHTML="";for(const t of c)u(t);const e=document.querySelectorAll(".js_character");for(const t of e)t.addEventListener("click",g)}function v(e){const t=e.imageUrl||"https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney";f.innerHTML+=`
  <li class="favorites__li">
    <img src="${t}" class="characters__img" alt="${e.name}">
    <h4 class="favorites__name">${e.name}</h4>
    <button class="favorites__btn js_btnRemove" data-id="${e._id}">Eliminar favorito</button>
  </li>`}function d(){f.innerHTML="";for(const t of r)v(t);document.querySelectorAll(".js_btnRemove").forEach(function(t){t.addEventListener("click",m)})}function g(e){const t=e.currentTarget,s=t.dataset.id,n=c.find(o=>o._id===parseInt(s)),a=r.findIndex(o=>o._id===parseInt(s));a===-1?(r.push(n),localStorage.setItem("f",JSON.stringify(r))):(r.splice(a,1),localStorage.setItem("f",JSON.stringify(r))),d(),t.classList.toggle("favorites__li"),t.classList.toggle("characters__li")}_.addEventListener("submit",e=>{e.preventDefault(),fetch(`//api.disneyapi.dev/character?name=${h.value}`).then(t=>t.json()).then(t=>{Array.isArray(t.data)?c=t.data:c=[t.data],i.innerHTML="",l()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{c=e.data,d(),l()});
//# sourceMappingURL=main.js.map
