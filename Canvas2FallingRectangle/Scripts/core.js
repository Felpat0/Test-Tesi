var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext("2d");

class Rectangle2D extends PhysicalObject2D{
  constructor(position, width, height){
    super(position, width, height);
  }

  draw(){
    context.beginPath();
    context.rect(this.position.x, this.position.y, this.width, this.height);
    context.stroke();
  }
}

class Terrain2D extends BoxCollider2D{
  constructor(position, width, height){
    super(position, width, height);
  }

  draw(){
    context.beginPath();
    context.rect(this.position.x, this.position.y, this.width, this.height);
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.stroke();
  }
}


var physicalObjects2D = [];
var colliders = [];
colliders.push(new Terrain2D(new Vector2D(0, 500), 800, 99));
canvas.addEventListener("click", function(event){
  physicalObjects2D.push(new Rectangle2D(new Vector2D(event.clientX -50, event.clientY -50), 100, 100));
  physicalObjects2D[physicalObjects2D.length-1].spawnTime = new Date().getTime();
 });

loop();
function loop(){
  window.requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
   for(var i = 0; i != physicalObjects2D.length; i++){
     physicalObjects2D[i].draw();
     if(!physicalObjects2D[i].isBotColliding(colliders))
      physicalObjects2D[i].gravityFall(physicalObjects2D[i].spawnTime - new Date().getTime());
   }

   for(var i = 0; i != colliders.length; i++){
     colliders[i].draw();
   }

}
