const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles;

var plinkos = [];

var divisions = [];

var divisionHeight = 300;

var turn = 0;

var score = 0;

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width / 2, height, width, 20);

  for(var i = 0; i <= width; i += 80){

    divisions.push(new Division(i, height - divisionHeight / 2, 10, divisionHeight));

  }

  for(var k = 40; k <= width; k += 50){

    plinkos.push(new Plinko(k, 75, 10));

  }

  for(var k = 15; k <= width - 10; k += 50){

    plinkos.push(new Plinko(k, 175, 10));

  }

  for(var k = 40; k <= width; k += 50){

    plinkos.push(new Plinko(k, 275, 10));

  }

  for(var k = 15; k <= width - 10; k += 50){

    plinkos.push(new Plinko(k, 375, 10));

  }

  Engine.run(engine);
  
}

function mousePressed(){

  turn++;

  particles = new Particle(mouseX, 10, 10);

}

function draw() {

  rectMode(CENTER);
  background("black");

  textSize(20);

  text("Score : " + score, 40, 40);

  ground.display();

  for(var i = 0; i < divisions.length; i ++){

    divisions[i].display();

  }

  for(var k = 0; k < plinkos.length; k ++){

    plinkos[k].display();

  }

  if(particles != null){

    particles.display();

  }
  
  drawSprites();
 
}
