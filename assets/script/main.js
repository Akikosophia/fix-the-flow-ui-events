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

const button = document.querySelector("a:nth-of-type(2)");

button.addEventListener('click', function() {
  button.classList.toggle('background');
  console.log('background')
});

let btn = document.querySelector('a:nth-of-type(3)')

btn.addEventListener('click', function() {
  btn.classList.toggle('rotate');
  console.log('rotate')

});

const count = document.querySelector("a:nth-of-type(5)");

count.addEventListener("click", (event) => {
  count.textContent = `Sprint: ${event.detail}`;
});

