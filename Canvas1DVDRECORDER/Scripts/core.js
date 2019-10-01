var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext("2d");

class DvdSymbol{
  constructor(x, y, width, height, speed, xDirection, yDirection){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.xDirection = xDirection;
    this.yDirection = yDirection;
  }
  draw(){
    context.beginPath();
    context.ellipse(this.x, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
    context.stroke();
    context.font = "40px Georgia";
    context.fillText("DVD", this.x -40, this.y+15);
  }

  move(){
    this.xDirection = this.xDirection/(Math.sqrt(Math.pow(this.xDirection, 2) + Math.pow(this.yDirection, 2)));
    this.yDirection = this.yDirection/(Math.sqrt(Math.pow(this.xDirection, 2) + Math.pow(this.yDirection, 2)));
    console.log(this.xDirection + "     " + this.yDirection);
    this.x += this.speed * this.xDirection;
    this.y += this.speed * this.yDirection;



    if(this.x - this.width <=0 || this.x + this.width >= canvas.width)
      this.xDirection = -this.xDirection;

    if(this.y - this.height <=0 || this.y + this.height >= canvas.height)
      this.yDirection = -this.yDirection;
  }
}

var ell = new DvdSymbol(300, 300, 100, 50, 4, 1.0, 1.0);
loop();
function loop(){
  window.requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
  ell.draw();
  ell.move();
}
