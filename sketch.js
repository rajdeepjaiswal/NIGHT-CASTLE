const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() 
{
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;

//triangles
cone = new Triangle(500,190,3,200);
cone1 = new Triangle(745,300,3,80);
cone2 = new Triangle(255,280,3,80);

//empty spaces 
stick112 = new stick(200,820,110,310);
stick111 = new stick(800,820,110,310);

//second story
stick108 = new stick(260,360,140,50);

stick64 = new stick(500,510,340,270);
box2 = new stick(744,510,130,320);
box1 = new stick (260,510,120,240);

stick103 = new stick(500,340,345,80);
stick106 = new stick (500,260,345,70);

stick222 = new stick (290,360,25,30);
stick110 = new stick (230,360,25,30);

//main 4 walls
stick1 = new stick(100,800,90,400);
stick2 = new stick(300,800,90,400);
stick3 = new stick (700,800,90,400);
stick4 = new stick (900,800,90,400);

//lower thin base
stick5 = new stick (200,980,110,10);
stick6 = new stick (500,980,310,10);
stick7 = new stick (800,980,110,10);

//entrance gate
stick8 = new stick (500,880,180,200);

//upper thick base
stick11 = new stick (200,650,120,20);
stick12 = new stick (500,650,320,20);
stick13 = new stick (800,650,120,20);

//next to the door horizontal pillar
stick14 = new stick (300,820,160,20);
stick15 = new stick (700,820,160,20);

//windows
stick16 = new stick (100,745,50,65);
stick17 = new stick (300,745,50,65);
stick18 = new stick (700,745,50,65);
stick19 = new stick (900,745,50,65);

//upper windows 
stick67 = new stick (500,500,90,130);
stick68 = new stick (745,420,55,80);

//under upper thick base and pillars
stick32 = new stick (200,665,100,10);
stick33 = new stick (500,665,300,10);
stick34 = new stick (800,665,100,10);

stick77 = new stick (100,613,90,10);
stick78 = new stick (300,613,90,10);
stick79 = new stick (700,613,90,10);
stick80 = new stick (900,613,90,10);

stick81 = new stick (495,380,355,10);
stick82 = new stick (744,350,145,10);
stick83 = new stick (260,390,140,10);

stick105 = new stick (500,300,360,10);

stick109 = new stick (256,330,145,10);

//small pillar
stick60 = new stick (800,570,70,140);
stick81 = new stick (800,523,70,20);

//bricks
stick35 = new stick (200,625,25,25);
stick36 = new stick (500,625,25,25);
stick37 = new stick (800,625,25,25);
stick38 = new stick (164,625,25,25);
stick39 = new stick (235,625,25,25);
stick40 = new stick (765,625,25,25);
stick41 = new stick (835,625,25,25);
stick42 = new stick (540,625,25,25);
stick43 = new stick (580,625,25,25);
stick44 = new stick (620,625,25,25);
stick45 = new stick (460,625,25,25);
stick46 = new stick (420,625,25,25);
stick47 = new stick (380,625,25,25);

stick48 = new stick (330,585,20,20);
stick49 = new stick (300,585,20,20);
stick50 = new stick (270,585,20,20);

stick51 = new stick (100,585,20,20);
stick52 = new stick (130,585,20,20);
stick53 = new stick (70,585,20,20);

stick54 = new stick (700,585,20,20);
stick55 = new stick (730,585,20,20);
stick56 = new stick (670,585,20,20);

stick57 = new stick (900,585,20,20);
stick58 = new stick (930,585,20,20);
stick59 = new stick (870,585,20,20);

stick61 = new stick (775,496,18,18);
stick62 = new stick (825,496,18,18);
stick63 = new stick (800,496,18,18);

stick69 = new stick (200,633,110,15);
stick70 = new stick (500,633,310,15);
stick71 = new stick (800,633,110,15);

stick72 = new stick (100,600,90,15);
stick73 = new stick (300,600,90,15);
stick74 = new stick (700,600,90,15);
stick75 = new stick (900,600,90,15);
stick76 = new stick (800,510,70,15);


stick87 = new stick (340,362,25,25);
stick89 = new stick (380,362,25,25);
stick90 = new stick (420,362,25,25);
stick91 = new stick (460,362,25,25);
stick92 = new stick (500,362,25,25);
stick93 = new stick (540,362,25,25);
stick94 = new stick (580,362,25,25);
stick95 = new stick (620,362,25,25);
stick96 = new stick (660,362,25,25);
stick97 = new stick (780,333,25,25);
stick98 = new stick (740,333,25,25);
stick99 = new stick (700,333,25,25);
stick101 = new stick (500,375,345,10);
stick102 = new stick (744,345,145,10);





}

function draw() 
{
  background("black");
  Engine.update(engine);
  fill("white");
  //text(mouseX+";"+mouseY,100,100);

  fill("black");
  textSize(50);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  text(" NIGHT CASTLE",10,80);

  //empty spaces 
  stroke("orange");
  strokeWeight(5);
  stick112.display();
  stick111.display();

  //triangles
  stroke("blue");
  cone.display();
  cone1.display();
  cone2.display();
  //second story
  stroke("pink");
  stick108.display();

  stroke("purple");
  stick64.display();
  box2.display();
  box1.display();
  stick103.display();

  stroke("blue");
  stick222.display();
  stick110.display();

  //main 4 walls
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();

  //lower thin base
  stick5.display();
  stick6.display();
  stick7.display();

  //entrance gate
  stroke("yellow");
  stick8.display();

  //upper thick base 
  stick11.display();
  stick12.display();
  stick13.display();

  //next to the door horizontal pillar
  stroke("skyblue");
  stick14.display();
  stick15.display();

  //windows
  stroke("skyblue");
  stick16.display();
  stick17.display();
  stick18.display();
  stick19.display();

  //upper windows 
  stick67.display();
  stick68.display();

  //under upper thick base and pillars
  stroke("violet")
  stick32.display();
  stick33.display();
  stick34.display();
  stick77.display();
  stick78.display();
  stick79.display();
  stick80.display();
  stick81.display();
  stick82.display();
  stick83.display();
  stick105.display();

  stick109.display();

  //small pillar
  stroke("pink");
  stick60.display();
 

  stick81.display();

  //bricks
  stroke("yellow");
  stick35.display();
  stick36.display();
  stick37.display();
  stick38.display();
  stick39.display();
  stick40.display();
  stick41.display();
  stick42.display();
  stick43.display();
  stick44.display();
  stick45.display();
  stick46.display();
  stick47.display();
  stick48.display();
  stick49.display();
  stick50.display();
  stick51.display();
  stick52.display();
  stick53.display();
  stick54.display();
  stick55.display();
  stick56.display();
  stick57.display();
  stick58.display();
  stick59.display();
  stick61.display();
  stick62.display();
  stick63.display();

  stroke("purple")
  stick69.display();
  stick70.display();
  stick71.display();
  stick72.display();
  stick73.display();
  stick74.display();
  stick75.display();
  stick76.display();
  stroke("yellow");
  stick87.display();
  stick89.display();
  stick90.display();
  stick91.display();
  stick92.display();
  stick93.display();
  stick94.display();
  stick95.display();
  stick96.display();
  stick97.display();
  stick98.display();
  stick99.display();
  stroke("purple");
  stick101.display();
  stick102.display();



  
}

