import"./assets/dark-theme-85a6970e.js";import"./assets/vendor-59c8246b.js";const l="/js_99_Cheessse/assets/symbol-defs-a993dfba.svg#icon-amazon",c="/js_99_Cheessse/assets/symbol-defs-a993dfba.svg#icon-ibooks",d="/js_99_Cheessse/assets/symbol-defs-a993dfba.svg#icon-trash",p="https://books-backend.p.goit.global/books/",o=document.querySelector(".shopping-list-default-div"),h=document.querySelector(".shopping-list-render");async function u(){try{const e=JSON.parse(localStorage.getItem("idBooks"))||[];if(!e||e.length===0){console.log("Масив ID порожній або відсутній.");return}const t=e.map(async s=>{const r=await fetch(`${p}/${s}`);if(!r.ok)throw new Error(`Failed to fetch data for ID: ${s}`);return r.json()}),a=await Promise.all(t);g(a)}catch(e){console.error("Error:",e.message)}}function g(e){if(e.length===0){o.style.display="block";return}const t=e.map(s=>`
      <div class="card">
        <img src="${s.book_image}" alt="book cover" class="book-cover" >
        <div class="about">
          <h2 class="book-title">${s.title}</h2>
          <p class="book-category">${s.list_name}</p>
          <p class="book-description">${s.description}</p>
          <p class="book-author">${s.author}</p>
        </div>
           <div class="buy">
        <a href="${s.buy_links[0].url}" target="_blank">
          <svg class="amazon" width="16" height="16">
            <use href="${l}"></use>
          </svg>
        </a>
        <a href="${s.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${c}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${s._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${d}"></use>
          </svg>
        </div>
      </button>
      </div>
    `).join("");h.insertAdjacentHTML("beforeend",t),e.length===0?o.style.display="block":o.style.display="none",document.querySelectorAll(".delete-btn").forEach(s=>{s.addEventListener("click",()=>{const r=s.getAttribute("data-book-id");f(r);const n=s.closest(".card");n&&n.remove(),i()})})}u();function f(e){const t=JSON.parse(localStorage.getItem("idBooks"))||[];if(!t||t.length===0)return;const a=t.filter(s=>s!==e);localStorage.setItem("idBooks",JSON.stringify(a))}function y(){return document.querySelector(".shopping-list-render").children.length===0}function i(){const e=document.querySelector(".support-ukraine");y()?(o.style.display="block",e.style.display="block"):(o.style.display="none",e.style.display="block")}i();
//# sourceMappingURL=commonHelpers2.js.map
