const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameObjects = [];

let images = ["st.png","st1.png","st2.png","st3.png", "st4.png"];

animate();

function animate(){
  if(Math.random()<1){
    let gameObject = {};
    gameObject.image = new Image();
    gameObject.image.src = images[getRandomNumber(images.length)];
    gameObject.x = getRandomNumber(canvas.width);
    gameObject.y = -150;
    gameObject.scale = Math.random();
    gameObject.v_y = 30;
    gameObjects.push(gameObject);
  }
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  for(let i = 0; i< gameObjects.length;i++){
    let gameObject = gameObjects[i];

    gameObject.y += gameObject.v_y*gameObject.scale;
    context.drawImage(gameObject.image,gameObject.x,gameObject.y,gameObject.image.width*gameObject.scale,gameObject.image.height*gameObject.scale);
    if(gameObject.y > canvas.height){
      gameObjects.splice(i,1);
    }
  }
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
