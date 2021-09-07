//--------------------Menu----------------------
const menu = document.querySelector(".btn-group-vertical");
menu.classList.remove("btn-group-vertical");
menu.classList.add("btn-group");

const btns = Array.from(document.querySelectorAll(".btn-group button"));

btns.forEach((btn, i) => {
  btn.classList.add("rounded");
  if (i >= 1) btn.classList.add("ml-2");
});

//--------------------Header------------------------
const header = document.querySelector(".jumbotron");
header.classList.add("bg-secondary", "text-right", "text-white");

const learnMoreBtn = header.lastElementChild;
learnMoreBtn.classList.remove("btn-primary");
learnMoreBtn.classList.add("btn-success");

//--------------------Cards-------------------------
const cardTitles = Array.from(document.querySelectorAll(".card-title"));
const cards = Array.from(document.querySelectorAll(".card"));

cardTitles.forEach((title) => {
  const closestCard = title.closest("div.card");
  closestCard.dataset["title"] = title.textContent;
});

const title = document.querySelector('[data-title="Animais"] .btn');
title.classList.remove("btn-primary");
title.classList.add("btn-success");

const insertBefore = (node, newNode) => {
  const current = node.parentElement;
  current.insertBefore(newNode, node);
};

const insertAfter = (node, newNode) => {
  const current = node.parentElement;
  current.insertBefore(newNode, node.nextSibling);
};

insertBefore(cards[0].offsetParent, cards[3].offsetParent);

insertAfter(cards[2].offsetParent, cards[1].offsetParent);




