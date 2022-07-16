const images = ["0.jpg","1.jpg","2.png","3.jpg","4.jpg","5.jpg"];
const div = document.querySelector(".bg-img");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

div.appendChild(bgImage);