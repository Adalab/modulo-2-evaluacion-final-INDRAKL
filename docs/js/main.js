document.querySelectorAll(".js_btnRemove");function m(e){e.preventDefault();const c=e.currentTarget.dataset.id,s=r.findIndex(a=>a._id===parseInt(c));s!==-1&&(r.splice(s,1),localStorage.setItem("f",JSON.stringify(r)),d(),l())}const i=document.querySelector(".js_charactersList"),f=document.querySelector(".js_charactersListFavorites"),h=document.querySelector(".js_inputSearch"),_=document.querySelector(".js_form");let n=[];const r=JSON.parse(localStorage.getItem("f"))||[];function u(e){const t=e.imageUrl||"https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney";r.findIndex(s=>s._id===parseInt(e._id))===-1?i.innerHTML+=`
    <li class="characters__li js_character" data-id="${e._id}">
      <img src="${t}" class="characters__img" alt="${e.name}">
      <h4 class="characters__name">${e.name}</h4>
    </li>`:i.innerHTML+=`
    <li class="favorites__li js_character" data-id="${e._id}">
      <img src="${t}" class="characters__img" alt="${e.name}">
      <h4 class="characters__name">${e.name}</h4>
    </li>`}function l(){i.innerHTML="";for(const t of n)u(t);const e=document.querySelectorAll(".js_character");for(const t of e){t.addEventListener("click",g);debugger}}function v(e){const t=e.imageUrl||"https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney";f.innerHTML+=`
  <li class="favorites__li">
    <img src="${t}" class="characters__img" alt="${e.name}">
    <h4 class="favorites__name">${e.name}</h4>
    <button class="favorites__btn js_btnRemove" data-id="${e._id}">Eliminar favorito</button>
  </li>`}function d(){f.innerHTML="";for(const t of r)v(t);document.querySelectorAll(".js_btnRemove").forEach(function(t){t.addEventListener("click",m)})}function g(e){const t=e.currentTarget,c=t.dataset.id,s=n.find(o=>o._id===parseInt(c)),a=r.findIndex(o=>o._id===parseInt(c));a===-1?(r.push(s),localStorage.setItem("f",JSON.stringify(r))):(r.splice(a,1),localStorage.setItem("f",JSON.stringify(r))),d(),t.classList.toggle("favorites__li"),t.classList.toggle("characters__li")}_.addEventListener("submit",e=>{e.preventDefault(),fetch(`//api.disneyapi.dev/character?name=${h.value}`).then(t=>t.json()).then(t=>{Array.isArray(t.data)?n=t.data:n=[t.data],i.innerHTML="",l()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{n=e.data,d(),l()});
//# sourceMappingURL=main.js.map
