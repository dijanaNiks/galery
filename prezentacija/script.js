const image = document.getElementById('slikata'); // Assuming your element has ID "slikata"

const imageList = ['1.jpg', '2.jpg'];

image.style.backgroundImage = `url("./assets/${imageList[1]}")`;

let x = 0

setInterval(() => {
    x++
    x === imageList.length && (x = 0)
    image.style.backgroundImage = `url("./assets/${imageList[x]}")`;
}, 1000);




