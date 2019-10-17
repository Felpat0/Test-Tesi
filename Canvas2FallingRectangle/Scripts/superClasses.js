
//TO DO: create vector2D class with vector functions and fix the code
//TO DO: complete isColliding function for squares
//Maybe some machine learning

//God class
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

//Class for physical objects
class PhysicalObject2D extends BoxCollider2D{
  constructor(x, y, width, height){
    super(x, y, width, height);
  }

  gravityFall(){

  }
}
