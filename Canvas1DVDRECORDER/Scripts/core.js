var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext("2d");

function DvdSymbol(x, y, width, height, xSpeed, ySpeed){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;

  this.draw = function(){
    context.beginPath();
    context.ellipse(this.x, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
    context.stroke();
    context.font = "40px Georgia";
    context.fillText("DVD", this.x -40, this.y+15);
  }

  this.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x - this.width <=0 || this.x + this.width >= canvas.width)
      this.xSpeed = -this.xSpeed;

    if(this.y - this.height <=0 || this.y + this.height >= canvas.height)
      this.ySpeed = -this.ySpeed;
  }
}

var ell = new DvdSymbol(300, 300, 100, 50, 3, 2);
loop();
function loop(){
  window.requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
  ell.draw();
  ell.move();
}
