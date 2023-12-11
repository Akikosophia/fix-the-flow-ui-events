let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

const card = document.querySelector("a:nth-of-type(15)");

card.addEventListener("dblclick", (e) => {
  card.classList.toggle("large");
});

// const card = document.querySelector("a:nth-of-type(2)");

// card.addEventListener("click", (e) => {
//   card.classList.toggle("large");
// });
