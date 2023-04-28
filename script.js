//////p1
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
//////////p2
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});
close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
//////////////////comment
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const testimonials = [
  {
    name: "adrian anthony gill",
    position: "British journalist",
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Falchetron.com%2FA-A-Gill&psig=AOvVaw1MFKSJYkzfqhaimoV7e08J&ust=1682151474306000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDK-dzEuv4CFQAAAAAdAAAAABAE",
    text: "Adrian Anthony Gill was a British journalist, critic, and author. Best known for his food and travel writing, he was also a television critic, was restaurant reviewer of The Sunday Times, wrote for Vanity Fair, GQ, and Esquire, and published numerous books. ",
  },
  {
    name: "Patricia Wells",
    position: " author of numerous food-related books",
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Farchive.jsonline.com%2Ffeatures%2Ffood%2Fpatricia-wells-knows-her-wine-b99115245z1-228239761.html%2F&psig=AOvVaw13vy0H6HioBV1AOWZJ7-Z4&ust=1682151551142000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCLioHFuv4CFQAAAAAdAAAAABA7",
    text: "She divides her time between Paris and Provence. She is the author of numerous food-related books.[2] Her book Patricia Wells at Home in Provence (1996) won the James Beard Award for Best International Cookbook. Wells is the only American and the only woman to be a restaurant critic for a major French publication, L'Express (1988–1991)",
  },

  {
    name: "James Beard",
    position: "American chef",
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pbs.org%2Fwnet%2Famericanmasters%2Fbiography-james-beard%2F8440%2F&psig=AOvVaw3C-zPdTIqCxDmo8QtGGCQt&ust=1682151698539000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDMr8bFuv4CFQAAAAAdAAAAABAE",
    text: "James Andrews Beard was an American chef, cookbook author, teacher and television personality. He pioneered television cooking shows, taught at The James Beard Cooking School in New York City and Seaside, Oregon, and lectured widely.",
  },
  {
    name: "Giles Coren",
    position: "British columnist",
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thefound.co.uk%2Fgiles-coren&psig=AOvVaw2Y8jlrKI-WcXhpTivQ2yk2&ust=1682151781948000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiI_-3Fuv4CFQAAAAAdAAAAABAE",
    text: "iles Robin Patrick Coren is a British columnist, food writer, and television and radio presenter. He has been a restaurant critic for The Times newspaper since 2002, and was named Food and Drink Writer of the Year at the British Press Awards in 2005.",
  },
  {
    name: "Nancy Leson",
    " position": "Commentator",

    text: "Seattle restaurants, Northwest cooking, great recipes. Nancy Leson gives the best advice on where to eat, what to eat, how to cook it. Let's eat!",
  },
  {
    name: " Gordon Ramsay ",
    position: "chef",

    text: "Gordon James Ramsay OBE is a British celebrity chef, restaurateur, television personality and writer. His restaurant group, Gordon Ramsay Restaurants, was founded in 1997 and has been awarded 17 Michelin stars overall; it currently holds a total of seven",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
/////////////////////////shopping cart
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let listMenu = document.querySelector(".list_menu");
let listCard = document.querySelector(".listCard");
let MenuHeader = document.querySelector(".menu");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  MenuHeader.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  MenuHeader.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Pizza",
    image: "17.png",
    price: 120000,
  },
  {
    id: 2,
    name: "Pizza ",
    image: "18.jpg",
    price: 120000,
  },
  {
    id: 3,
    name: "Pizza",
    image: "21.jpg",
    price: 220000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "41.jpg",
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "28.jpg",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "53.jpg",
    price: 120000,
  },
  {
    id: 7,
    name: "PRODUCT NAME 6",
    image: "41.jpg",
    price: 120000,
  },
  {
    id: 8,
    name: "PRODUCT NAME 6",
    image: "18.jpg",
    price: 120000,
  },
  {
    id: 9,
    name: "PRODUCT NAME 6",
    image: "mak_zinger.png",
    price: 120000,
  },
  {
    id: 10,
    name: "PRODUCT NAME 6",
    image: "41.jpg",
    price: 120000,
  },
  {
    id: 11,
    name: "PRODUCT NAME 6",
    image: "28.jpg",
    price: 120000,
  },
  {
    id: 12,
    name: "PRODUCT NAME 6",
    image: "23.jpg",
    price: 120000,
  },
  {
    id: 13,
    name: "PRODUCT NAME 6",
    image: "41.jpg",
    price: 120000,
  },
  {
    id: 14,
    name: "PRODUCT NAME 6",
    image: "53.jpg",
    price: 120000,
  },
  {
    id: 15,
    name: "PRODUCT NAME 6",
    image: "espageti_meygoo.png",
    price: 120000,
  },
  {
    id: 16,
    name: "PRODUCT NAME 6",
    image: "salad.jpg",
    price: 120000,
  },
  {
    id: 17,
    name: "PRODUCT NAME 6",
    image: "23.jpg",
    price: 120000,
  },
  {
    id: 18,
    name: "PRODUCT NAME 6",
    image: "18.jpg",
    price: 120000,
  },
  {
    id: 19,
    name: "PRODUCT NAME 6",
    image: "41.jpg",
    price: 120000,
  },
  {
    id: 20,
    name: "PRODUCT NAME 6",
    image: "51.jpg",
    price: 120000,
  },
  {
    id: 21,
    name: "PRODUCT NAME 6",
    image: "23.jpg",
    price: 120000,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    listMenu.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
///////////////////loading page
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
  } else {
    document.querySelector("body").style.visibility = "visible";
  }
};
/////////////////question box javascript
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
///////////////////////////vote
const rating = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

panel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback:${selectedRating}</strong>
    <p>we will be use your feed back for improve our self</p>`;
});

function removeActive() {
  for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove("active");
  }
}
