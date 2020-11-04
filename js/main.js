const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.active');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = `none`;
  sneaker.style.transform = `translateZ(100px) rotateZ(-15deg)`;
  title.style.transform = `translateZ(90px)`;
  description.style.transform = `translateZ(80px)`;
  sizes.style.transform = `translateZ(70px)`;
  purchase.style.transform = `translateZ(50px)`;
})

// Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = `all .5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
  title.style.transform = `translateZ(0px)`;
  description.style.transform = `translateZ(0px)`;
  sizes.style.transform = `translateZ(0px)`;
  purchase.style.transform = `translateZ(0px)`;
})
