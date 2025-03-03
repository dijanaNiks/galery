const slider = document.getElementById('slider')
const circles = document.getElementById('circles')

const path = "./public/galery/"
const imgList = [`${path}1.jpg`, `${path}2.jpg`, `${path}3.jpg`]

let x = 0;
let lastTime = 0;
const interval = 4000; 

const animate = (timestamp) => {
  if (timestamp - lastTime >= interval) {
    lastTime = timestamp; 
    x = (x + 1) % imgList.length; 
    slider.src = imgList[x];
  }

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);


