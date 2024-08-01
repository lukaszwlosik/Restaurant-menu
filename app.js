"use strict";

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
console.log(menu);

const mainSection = document.querySelector(".main-style");
const btnContainer = document.querySelector(".btn-container");

// Dodanie całego menu przy pomocy JavaScript obiektu

// Jak wszystkie elementy DOM się załadują! Czyli wszystko zostanie zparsowane do struktury AST. Nie czeka na zdjęcia, async scripts, etc.
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  // Tworzy nową tablicę wywołując funkcje dla każdego jej elementu. Nie wykonuje się dla pustych elementów. Nie zmienia oryginalnej tablicy. Zauważ, że dzięki mapie masz tak jakby foreach, że wszystkie elementy i nie musisz wpisywać menu[0].img, menu[1].im, etc.
  let displayMenu = menuItems.map(function (item) {
    return `<section class="meal">
          <div class="img-content">
            <img src="${item.img}" alt="${item.category}" />
          </div>
          <div class="text-content-section">
            <div class="header-text">
              <h2>${item.title}</h2>
              <p class="main-color">${item.price}</p>
            </div>
            <div class="text-content">
              ${item.desc}
            </div>
          </div>
        </section>`;
  });
  //   Tworzy element string z tablicy, biere wsyzstkie elementy oddzielone tym co wpiszemy w nawiasy
  //   console.log(displayMenu);
  displayMenu = displayMenu.join("");
  //   console.log(displayMenu);
  mainSection.innerHTML = displayMenu;
}

function displayMenuButtons() {
  // We więcej niż jednym miejscu, mamy kategorię np. śniadanie, chodzi o to, ze values zapamiętuje te wyniki, więc jest sprawdzenie jeśli values nie zawiera, to wpychamy nową itd. itd.
  const categories = menu.reduce(
    function (values, item) {
      // console.log(values);
      // console.log(item);
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  //   Tworzy mi stringa którego będę mógł wrzucić do innerHTML, tak żeby każda kategoria była osobno!
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="btn filter-btn" data-id="${category}">${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Przypisuje dataset-id przypisany do elementu
      const category = e.currentTarget.dataset.id;
      // Tworzy tablice z elementami które posiadają tę kategorię
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
      console.log(category);
    });
  });
}
