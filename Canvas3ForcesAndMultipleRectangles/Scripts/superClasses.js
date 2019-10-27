
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

  isBotColliding(colliders){
    var i = -1;
    do{
      i++;
      if(/*Math.abs(this.position.x - colliders[i].position.x) < 5 && */this.position.y + this.height - colliders[i].position.y >= -5){
        this.position.y = colliders[i].position.y - this.height;
        return true;
      }
    }while(i != colliders.length -1);
    return false;
  }
}

//Class for physical objects
class PhysicalObject2D extends BoxCollider2D{
  constructor(position, width, height){
    super(position, width, height);
    var spawnTime = new Date().getTime();
  }

  gravityFall(timeLapsed, colliders){
    //Formula moto: x = x0+v0*t+1/2*a*t^2
    if(!this.isBotColliding(colliders))
      this.position.y = this.initialPosition.y + (1/2) * 9.8 * Math.pow(timeLapsed / 1000, 2) * 10;
  }
}
