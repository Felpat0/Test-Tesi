var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext("2d");

class Rectangle2D extends PhysicalObject2D{
  constructor(x, y, width, height){
    super(x, y, width, height);
  }

  draw(){
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.stroke();
  }
}

var physicalObjects2D = [];

loop();
function loop(){
  window.requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.addEventListener("click", function(event){
    physicalObjects2D.push(new Rectangle2D(event.clientX -50, event.clientY -50, 100, 100));
   });

   for(var i = 0; i != physicalObjects2D.length; i++){
     physicalObjects2D[i].draw();
   }

}
