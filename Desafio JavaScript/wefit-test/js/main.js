//--------------------Menu----------------------
const menu = document.querySelector(".btn-group-vertical");
menu.classList.remove("btn-group-vertical");
menu.classList.add("btn-group");

const btns = Array.from(document.querySelectorAll(".btn-group button"));

btns.forEach((btn, i) => {
  btn.classList.add("rounded");
  if (i >= 1) btn.classList.add("ml-2");
});

