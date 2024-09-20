const image = document.getElementById('slikata'); // Assuming your element has ID "slikata"

const imageList = ['1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];

image.style.backgroundImage = `url("./assets/${imageList[1]}")`;

let x = 0

setInterval(() => {
    x++
    x === imageList.length && (x = 0)
    image.style.backgroundImage = `url("./assets/${imageList[x]}")`;
}, 3000);




