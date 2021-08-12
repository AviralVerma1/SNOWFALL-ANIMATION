const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var bg,boyImg,snowman,snowmanImg;

function preload(){
  bg = loadImage("snow2.jpg");
  boyImg = loadImage("child.png");
  snowmanImg = loadImage("Snowmans.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  invisibleGround = createSprite(400.395,800,10);
  invisibleGround.visible = false;

  snowman = createSprite(100,350);
  snowman.scale = 1.5;
  snowman.addImage(snowmanImg);

  boy = createSprite(300,350);
  boy.addImage(boyImg);

  snow1 = new Snowflake(random(0,800),random(random(-100,-200),-200));
  snow2 = new Snowflake(random(0,800),random(-100,-200));
  snow3 = new Snowflake(random(0,800),random(random(-100,-200),-200));
  snow4 = new Snowflake(random(0,800),random(-100,-200));
  snow5 = new Snowflake(random(0,800),random(random(-100,-200),-200));
  snow6 = new Snowflake(random(0,800),random(-100,-200));
  snow7 = new Snowflake(random(0,800),random(random(-100,-200),-200));
  snow8 = new Snowflake(random(0,800),random(-100,-200));
  snow9 = new Snowflake(random(0,800),random(random(-100,-200),-200));
  snow10 = new Snowflake(random(0,800),random(-100,-200));

}

function draw() {
  background(bg);  
  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();

  // boy.collide(invisibleGround);
  snowman.collide(invisibleGround);

  if(keyDown("left_arrow")){
    boy.x -=3
  }

  if(keyDown("right_arrow")){
    boy.x +=3
  }

  // if(keyDown("space")){
  //   boy.velocityY = -10;
  // }

  // boy.velocityY += 0.8;

  drawSprites();
}