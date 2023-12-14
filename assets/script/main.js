let interaction = document.querySelector('a:nth-of-type(9)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

const card = document.querySelector("a:nth-of-type(12)");

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

const test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    event.target.style.color = "green";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "Plum";
    }, 500);
  },
  false,
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "PaleVioletRed";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "lightgreen";
    }, 500);
  },
  false,
);

const output = document.querySelector("#output a");

document.addEventListener("scroll", (event) => {
  output.innerHTML = `scroll code `;
  console.log('scroll')

});

document.addEventListener("scrollend", (event) => {
  output.innerHTML = `code`;
  console.log('scrollend')

});

let side = document.querySelector('a:nth-of-type(1)')

side.addEventListener('mouseover', function() {
  side.classList.toggle('side');
  console.log('side')

});

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('dblclick', function() {
  development.classList.toggle('focus');
  console.log('focus')

});
