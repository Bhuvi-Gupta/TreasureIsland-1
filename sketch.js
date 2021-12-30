var canvas;
var bgImage1, bgImage2;
var bagSprite, broomSprite, catSprite;
var level = 1;
function preload(){
  bgImage1 = loadImage("messy_room_1.png");
  bgImage2 = loadImage("treehouse_1.png");

  bag = loadImage("./RoomImages/bag.png");
  broom = loadImage("./RoomImages/broom.png");
  cat = loadImage("./RoomImages/cat.png");
  fruits = loadImage("./RoomImages/fruits.png");
  knife = loadImage("./RoomImages/knife.png");
  necklace = loadImage("./RoomImages/necklace.png");
  phone = loadImage("./RoomImages/phone.png");
  racket = loadImage("./RoomImages/racket.png");
  scarf = loadImage("./RoomImages/scarf.png");
  socks = loadImage("./RoomImages/socks.png");

  rect1 = loadImage("./RoomImages/rect1.png");

  bagName = loadImage("./RoomImages/bag_name.png");
  broomName = loadImage("./RoomImages/broom_name.png");
  catName = loadImage("./RoomImages/cat_name.png");
  fruitsName = loadImage("./RoomImages/fruits_name.png");
  knifeName = loadImage("./RoomImages/knife_name.png");
  necklaceName = loadImage("./RoomImages/necklace_name.png");
  phoneName = loadImage("./RoomImages/phone_name.png");
  racketName = loadImage("./RoomImages/racket_name.png");
  scarfName = loadImage("./RoomImages/scarf_name.png");
  socksName = loadImage("./RoomImages/socks_name.png");

  ax = loadImage("./TreeHouseImages/ax.png");
  ball = loadImage("./TreeHouseImages/ball.png");
  bear = loadImage("./TreeHouseImages/bear.png");
  box = loadImage("./TreeHouseImages/box.png");
  bucket = loadImage("./TreeHouseImages/bucket.png");
  extinguisher = loadImage("./TreeHouseImages/extinguisher.png");
  flowers = loadImage("./TreeHouseImages/flowers.png");
  nest = loadImage("./TreeHouseImages/nest.png");
  pillow = loadImage("./TreeHouseImages/pillow.png");
  rope = loadImage("./TreeHouseImages/rope.png");

  axName = loadImage("./TreeHouseImages/axName.png");
  ballName = loadImage("./TreeHouseImages/ballName.png");
  bearName = loadImage("./TreeHouseImages/bearName.png");
  boxName = loadImage("./TreeHouseImages/boxName.png");
  bucketName = loadImage("./TreeHouseImages/bucketName.png");
  extinguisherName = loadImage("./TreeHouseImages/extinguisherName.png");
  flowersName = loadImage("./TreeHouseImages/flowersName.png");
  nestName = loadImage("./TreeHouseImages/nestName.png");
  pillowName = loadImage("./TreeHouseImages/pillowName.png");
  ropeName = loadImage("./TreeHouseImages/ropeName.png");


}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  if(level === 2){
    treehouse = createSprite(windowWidth/2, windowHeight/2);
    treehouse.addImage(bgImage2);
    treehouse.scale = 1;


  }
  

  roomObjects = createSprite (windowWidth/2, windowHeight + 110);
  roomObjects.addImage(rect1);
  roomObjects.scale = 2;

  bagNameSprite = createSprite(windowWidth/3 - 470, windowHeight - 40);
  bagNameSprite.addImage(bagName);

  broomNameSprite = createSprite(windowWidth/3 - 170, windowHeight - 40);
  broomNameSprite.addImage(broomName);

  catNameSprite = createSprite(windowWidth/3 + 100, windowHeight - 35);
  catNameSprite.addImage(catName);

  fruitsNameSprite = createSprite(windowWidth/2 + 50, windowHeight - 35);
  fruitsNameSprite.addImage(fruitsName);

  knifeNameSprite = createSprite(windowWidth/2 + 370, windowHeight - 35);
  knifeNameSprite.addImage(knifeName);

  necklaceNameSprite = createSprite(windowWidth - 500, windowHeight - 130);
  necklaceNameSprite.addImage(necklaceName);

  phoneNameSprite = createSprite(windowWidth/2 + 80, windowHeight - 130);
  phoneNameSprite.addImage(phoneName);

  racketNameSprite = createSprite(windowWidth/2 - 300, windowHeight - 130);
  racketNameSprite.addImage(racketName);

  scarfNameSprite = createSprite(windowWidth/2 - 650, windowHeight - 130);
  scarfNameSprite.addImage(scarfName);

  socksNameSprite = createSprite(windowWidth - 300, windowHeight - 35);
  socksNameSprite.addImage(socksName);

  
  

  bagSprite = createSprite(windowWidth/3 + 30, windowHeight - 370);
  bagSprite.addImage(bag);
  bagSprite.scale = 0.25;

  broomSprite = createSprite(windowWidth - 50, windowHeight - 330);
  broomSprite.addImage(broom);
  broomSprite.scale = 0.3;

  catSprite = createSprite(windowWidth/3, windowHeight - 260);
  catSprite.addImage(cat);
  catSprite.scale = 0.3;

  fruitsSprite = createSprite(windowWidth/2 + 200, windowHeight - 540);
  fruitsSprite.addImage(fruits);
  fruitsSprite.scale = 0.2;

  knifeSprite = createSprite(windowWidth/3 - 505, windowHeight - 845);
  knifeSprite.addImage(knife);
  knifeSprite.scale = 0.15;

  necklaceSprite = createSprite(windowWidth - 200, windowHeight - 440);
  necklaceSprite.addImage(necklace);
  necklaceSprite.scale = 0.15;

  phoneSprite = createSprite(windowWidth/2 + 30, windowHeight - 625);
  phoneSprite.addImage(phone);
  phoneSprite.scale = 0.1;

  racketSprite = createSprite(windowWidth/3 - 250, windowHeight - 375);
  racketSprite.addImage(racket);
  racketSprite.scale = 0.4;

  scarfSprite = createSprite(windowWidth/2 + 200, windowHeight - 375);
  scarfSprite.addImage(scarf);
  scarfSprite.scale = 0.15;

  socksSprite = createSprite(windowWidth - 300, windowHeight/2 + 100);
  socksSprite.addImage(socks);
  socksSprite.scale = 0.1;
  //database = firebase.database();
  //game = new Game();
  //game.getState();
  //game.start();
}
function draw() {
  background(bgImage1);



  drawSprites();
  
}