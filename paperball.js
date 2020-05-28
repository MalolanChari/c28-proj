class Paper {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("papper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };