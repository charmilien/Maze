var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7b45dc8a-8088-4486-b14f-bdf65946a41f","42ec8e1a-d431-44c9-a826-4cdb9f79b244","20147384-68c2-4e68-aeaa-f09d1d7dd223","22b42806-7b2d-4df0-a929-3897b2c4ba52","e57f28a3-55be-46dc-a61c-64ad3815acd4","41785985-e0b6-4310-84c7-d81c4bba5329","e1a75617-8a86-44d7-8c9a-cf4a84a71323"],"propsByKey":{"7b45dc8a-8088-4486-b14f-bdf65946a41f":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png"},"42ec8e1a-d431-44c9-a826-4cdb9f79b244":{"name":"sofia","sourceUrl":null,"frameSize":{"x":30,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"C1lsb5yjCHSU64hdmog6TV8ooN63bSlq","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":40},"rootRelativePath":"assets/42ec8e1a-d431-44c9-a826-4cdb9f79b244.png"},"20147384-68c2-4e68-aeaa-f09d1d7dd223":{"name":"cup","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":3,"version":"MeMXvTIZrEwDKCKuwvPat9sNFX_E9Rog","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/20147384-68c2-4e68-aeaa-f09d1d7dd223.png"},"22b42806-7b2d-4df0-a929-3897b2c4ba52":{"name":"kid_20_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aXJ6UqXBGzFimY3pfKliMHszkPWU4q6H/category_characters/kid_20.png","frameSize":{"x":200,"y":272},"frameCount":1,"looping":true,"frameDelay":2,"version":"aXJ6UqXBGzFimY3pfKliMHszkPWU4q6H","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":272},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aXJ6UqXBGzFimY3pfKliMHszkPWU4q6H/category_characters/kid_20.png"},"e57f28a3-55be-46dc-a61c-64ad3815acd4":{"name":"sofia_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eTqcjcNHgbXfP5vdIU5k86CP8HIQhqys/category_animals/bunny2.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"eTqcjcNHgbXfP5vdIU5k86CP8HIQhqys","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eTqcjcNHgbXfP5vdIU5k86CP8HIQhqys/category_animals/bunny2.png"},"41785985-e0b6-4310-84c7-d81c4bba5329":{"name":"crab_1","sourceUrl":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"k76J3fnUizuR.cly1ePZrTD5O0KW3BIz","loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png"},"e1a75617-8a86-44d7-8c9a-cf4a84a71323":{"name":"gameplaywacky_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6RErheXohDYDqsju4kZuQxK7OYey6QJn/category_germs/gameplaywacky_04.png","frameSize":{"x":391,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"6RErheXohDYDqsju4kZuQxK7OYey6QJn","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6RErheXohDYDqsju4kZuQxK7OYey6QJn/category_germs/gameplaywacky_04.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the game object
var bk = createSprite(200, 200,5,5);
bk.setAnimation("bg");
  var Sofia = createSprite(20,25,18,18);  

//creating the maze
  
  var m1 = createSprite(10,70,100,20);
   m1.shapeColor = "brown";
  var m2 = createSprite(100,50,20,100);
  m2.shapeColor = "brown";
  var m3 = createSprite(80,130,100,20);
  m3.shapeColor = "brown";
  var m4 = createSprite(50,250,20,100);
  m4.shapeColor = "brown";
  var m5 = createSprite(130,220,100,20);
   m5.shapeColor = "brown";
  var m6 = createSprite(10,250,100,20);
   m6.shapeColor = "brown";
  var m7 = createSprite(160,120,20,100);
   m7.shapeColor = "brown";
  var m8 = createSprite(150,20,100,20);
   m8.shapeColor = "brown";
  var m9 = createSprite(250,70,20,100);
   m9.shapeColor = "brown";
  var m10 = createSprite(270,150,100,20);
   m10.shapeColor = "brown";
  var m11 = createSprite(330,50,100,20);
   m11.shapeColor = "brown";
  var m12 = createSprite(340,125,20,100);
   m12.shapeColor = "brown";
  var m13 = createSprite(220,250,20,100);
   m13.shapeColor = "brown";
  var m14 = createSprite(330,210,130,20);
   m14.shapeColor = "brown";
  var m15 = createSprite(100,300,20,100);
   m15.shapeColor = "brown";
  var m16 = createSprite(180,310,100,20);
   m16.shapeColor = "brown";
  var m17 = createSprite(30,352,20,100);
   m17.shapeColor = "brown";
  var m18 = createSprite(175,352,20,100);
 m18.shapeColor = "brown";
  var m19 = createSprite(280,290,20,100);
   m19.shapeColor = "brown";
  var m20 = createSprite(350,270,120,20);
   m20.shapeColor = "brown";
  var m21 = createSprite(250,390,100,20);
   m21.shapeColor = "brown";
  var m22 = createSprite(330,370,20,100);
   m22.shapeColor = "brown";
  var target = createSprite(385,390,20,50);
  target.shapeColor = "yellow";
  

function draw() {
  //setting the background color to white 
 background("black");


Sofia.velocityX=0;
Sofia.velocityY=0;

Sofia.setAnimation("sofia");



 
//stroke(rgb(128, 128, 128));
//stroke("yellow")

if (keyDown("UP_ARROW")) {
  
Sofia.velocityX=0;
Sofia.velocityY=-6;
}
if (keyDown(DOWN_ARROW)) {
  
Sofia.velocityX=0;
Sofia.velocityY=6;
}
if (keyDown(LEFT_ARROW)) {
  
Sofia.velocityX=-6;
Sofia.velocityY=0;
}
if (keyDown(RIGHT_ARROW)) {
  
Sofia.velocityX=6;
Sofia.velocityY=0;
}

createEdgeSprites();
Sofia.bounceOff(m1);
Sofia.bounceOff(m2);
Sofia.bounceOff(m3);
Sofia.bounceOff(m4);
Sofia.bounceOff(m5);
Sofia.bounceOff(m6);
Sofia.bounceOff(m7);
Sofia.bounceOff(m8);
Sofia.bounceOff(m9);
Sofia.bounceOff(m10);
Sofia.bounceOff(m11);
Sofia.bounceOff(m12);
Sofia.bounceOff(m13);
Sofia.bounceOff(m14);
Sofia.bounceOff(m15);
Sofia.bounceOff(m16);
Sofia.bounceOff(m17);
Sofia.bounceOff(m18);
Sofia.bounceOff(m19);
Sofia.bounceOff(m20);
Sofia.bounceOff(m21);
Sofia.bounceOff(m22);

Sofia.bounceOff(edges);

target.setAnimation("cup");

if ( Sofia.isTouching(target))  
{
 Sofia.setVelocity(0,0);
  }
  
drawSprites();

if ( Sofia.isTouching(target))  
{
  stroke("white");
  fill("yellow");
  textSize(50);
  text("YOU WIN", 110,210);
  }

stroke("yellow")
fill("black")
textSize(20);
text("Cup", 360, 360);
textSize(20);
text("Sofia",10,60);

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
