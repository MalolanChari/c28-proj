class Slingshot{
    constructor(bodyA,pointB){
        var option={
            'bodyA' : bodyA,
            'pointB' : pointB,
            'length' : 10,
            'stiffness' : 0.08
        
        }
    
        this.slingshot=Matter.Constraint.create(option)


        World.add(world,this.slingshot)

     
    }

    display(){
        
        if(this.slingshot.bodyA){

        strokeWeight(5)
        stroke("grey");
        line( this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.slingshot.pointB.x,
            this.slingshot.pointB.y)

        }   
    }

    fly(){
        this.slingshot.bodyA=null
    }
}