class BoxCollider2D{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get isColliding(){
    return false;
  }
}

class PhysicalObject2D extends BoxCollider2D{
  constructor(x, y, width, height){
    super(x, y, width, height);
  }

  gravityFall(){

  }
}
