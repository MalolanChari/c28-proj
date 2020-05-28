class Trash {
    constructor(x,y) {
      var options = {
         
          'restitution':0,
            'friction':50,
            'density':100
      }
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.width = 300;
      this.height = 350;
      this.image = loadImage("trash.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };