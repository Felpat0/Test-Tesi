
//TO DO: create vector2D class with vector functions and fix the code
//TO DO: complete isColliding function for squares


class Vector2D{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  isNormalized(){
    if(this.x/(1 - Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))) <= 0.1)
      return true;
    else
      return false;
  }

  normalize(){
    this.x = this.x/(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
  }
}

//God class
class BoxCollider2D{
  constructor(position, width, height){
    this.position = position;
    this.initialPosition = position;
    this.width = width;
    this.height = height;
  }

  get isColliding(){
    return false;
  }
}

//Class for physical objects
class PhysicalObject2D extends BoxCollider2D{
  constructor(position, width, height){
    super(position, width, height);
  }

  gravityFall(timeLapsed){
    //Formula moto: x = x0+v0*t+1/2*a*t^2
    this.position.y = this.initialPosition.y/*posizione iniziale*/ + (1/2) * 9.8 * Math.pow(timeLapsed, 2) * 0.00001 /*reduction factor for slowing the square down*/;
  }
}
