const menu = [
 {name:"Espresso",cat:"coffee",price:"2.00 JD",desc:"Strong, bold and essential.",img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e32?auto=format&fit=crop&w=500&q=80"},
 {name:"Americano",cat:"coffee",price:"2.50 JD",desc:"Smooth and classic.",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"},
 {name:"Cappuccino",cat:"coffee",price:"3.00 JD",desc:"Perfectly balanced with creamy foam.",img:"https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80"},
 {name:"Latte",cat:"coffee",price:"3.00 JD",desc:"Creamy, smooth and comforting.",img:"https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=500&q=80"},
 {name:"Iced Caramel Latte",cat:"cold",price:"3.50 JD",desc:"Chilled espresso, fresh milk, caramel and ice.",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80"},
 {name:"Iced Spanish Latte",cat:"cold",price:"3.50 JD",desc:"Espresso with milk and sweet condensed milk.",img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80"},
 {name:"Berry Mojito",cat:"mocktails",price:"3.50 JD",desc:"Refreshing berries, mint and sparkling citrus.",img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80"},
 {name:"Passion Mojito",cat:"mocktails",price:"3.50 JD",desc:"Tropical passion fruit with fresh mint.",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"},
 {name:"Clouds Burger",cat:"food",price:"5.50 JD",desc:"Juicy burger with cheese and house sauce.",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"},
 {name:"Chicken Crispy",cat:"food",price:"5.00 JD",desc:"Crispy chicken with fries and signature sauce.",img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80"},
 {name:"Chocolate Cake",cat:"dessert",price:"3.00 JD",desc:"Rich chocolate cake for a sweet finish.",img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"},
 {name:"Lotus Cheesecake",cat:"dessert",price:"3.50 JD",desc:"Creamy cheesecake with Lotus biscuit.",img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80"}
];

let currentFilter = "all";

function renderMenu(){
  const q = document.getElementById("search").value.toLowerCase().trim();
  const grid = document.getElementById("menuGrid");
  const items = menu.filter(x => (currentFilter==="all" || x.cat===currentFilter) && x.name.toLowerCase().includes(q));
  grid.innerHTML = items.map((x,i)=>`
    <article class="item" onclick="openModal(${menu.indexOf(x)})">
      <img src="${x.img}" alt="${x.name}">
      <div class="item-info"><h3>${x.name}</h3><p>${x.desc}</p><div class="price">${x.price}</div></div>
      <button class="plus" aria-label="View ${x.name}">+</button>
    </article>`).join("");
}
function filterMenu(cat){
  currentFilter=cat; document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("active",b.dataset.filter===cat));
  renderMenu(); document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>filterMenu(b.dataset.filter));
function scrollToMenu(){document.getElementById("menu").scrollIntoView({behavior:"smooth"})}
function openModal(i){const x=menu[i];document.getElementById("modalImg").src=x.img;document.getElementById("modalName").textContent=x.name;document.getElementById("modalDesc").textContent=x.desc;document.getElementById("modalPrice").textContent=x.price;document.getElementById("modal").classList.add("show")}
function closeModal(){document.getElementById("modal").classList.remove("show")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
document.getElementById("langBtn").onclick=()=>{
 const rtl=document.documentElement.dir!=="rtl";
 document.documentElement.dir=rtl?"rtl":"ltr"; document.documentElement.lang=rtl?"ar":"en";
 document.getElementById("langBtn").textContent=rtl?"English":"عربي";
};
renderMenu();
