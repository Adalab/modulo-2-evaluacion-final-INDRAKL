const i=document.querySelector(".js_charactersList"),l=document.querySelector(".js_charactersListFavorites"),h=document.querySelector(".js_inputSearch"),_=document.querySelector(".js_form");document.querySelectorAll(".js_btnRemove");let a=[];const s=JSON.parse(localStorage.getItem("f"))||[];function m(e){const t=e.imageUrl||"https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney";s.findIndex(c=>c._id===parseInt(e._id))===-1?i.innerHTML+=`
    <li class="characters__li js_character" data-id="${e._id}">
      <img src="${t}" class="characters__img" alt="${e.name}">
      <h4 class="characters__name">${e.name}</h4>
    </li>`:i.innerHTML+=`
    <li class="favorites__li js_character" data-id="${e._id}">
      <img src="${t}" class="characters__img" alt="${e.name}">
      <h4 class="characters__name">${e.name}</h4>
    </li>`}function d(e){for(const r of a)m(r);const t=document.querySelectorAll(".js_character");for(const r of t)r.addEventListener("click",v)}function u(e){const t=e.imageUrl||"https://via.placeholder.com/210x295/ff9e06/ff46e1/?text=Disney";l.innerHTML+=`
  <li class="favorites__li js_character">
    <img src="${t}" class="characters__img" alt="${e.name}">
    <h4 class="favorites__name">${e.name}</h4>
    <button class="favorites__btn js_btnRemove">Eliminar favorito</button>
  </li>`}function f(){l.innerHTML="";for(const e of s)u(e)}function v(e){const t=e.currentTarget,r=t.dataset.id,c=a.find(n=>n._id===parseInt(r)),o=s.findIndex(n=>n._id===parseInt(r));o===-1?(s.push(c),localStorage.setItem("f",JSON.stringify(s))):(s.splice(o,1),localStorage.setItem("f",JSON.stringify(s))),f(),t.classList.toggle("favorites__li"),t.classList.toggle("characters__li")}_.addEventListener("submit",e=>{e.preventDefault(),fetch(`//api.disneyapi.dev/character?name=${h.value}`).then(t=>t.json()).then(t=>{Array.isArray(t.data)?a=t.data:a=[t.data],i.innerHTML="",d()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{a=e.data,f(),d()});
//# sourceMappingURL=main.js.map
