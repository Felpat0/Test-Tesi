var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext("2d");

class DvdSymbol{
  constructor(position, width, height, speed, direction){
    this.position = position;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.direction = direction
  }
  draw(){
    context.beginPath();
    context.ellipse(this.position.x, this.position.y, this.width, this.height, 0, 0, 2 * Math.PI);
    context.stroke();
    context.font = "40px Georgia";
    context.fillText("DVD", this.position.x -40, this.position.y+15);
  }

  move(){
    this.position.x += this.speed * this.direction.x;
    this.position.y += this.speed * this.direction.y;



    if(this.position.x - this.width <=0 || this.position.x + this.width >= canvas.width)
      this.position.xDirection = -this.position.xDirection;

    if(this.position.y - this.height <=0 || this.position.y + this.height >= canvas.height)
      this.position.yDirection = -this.position.yDirection;
  }
}

var ell = new DvdSymbol(300, 300, 100, 50, 4, new Vector2D(1.0, 1.0));
loop();
function loop(){
  window.requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
  ell.draw();
  ell.move();
}
