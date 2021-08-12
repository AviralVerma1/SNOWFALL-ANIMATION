class Snowflake{
    constructor(x,y){
        var options ={
            frictionAir : random(0.002,0.3)
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        
        this.image = loadImage("snow5.webp");

        this.width = random(70,20);
        this.height = this.width;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        if(pos.y > 390){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(-100,-200)});
        }
    }
}