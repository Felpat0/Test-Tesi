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

var physicalObjects2D = [];
canvas.addEventListener("click", function(event){
  physicalObjects2D.push(new Rectangle2D(new Vector2D(event.clientX -50, event.clientY -50), 100, 100));
 });

loop();
function loop(){
  window.requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
   for(var i = 0; i != physicalObjects2D.length; i++){
     physicalObjects2D[i].draw();
     console.log(physicalObjects2D.length);
   }

}
