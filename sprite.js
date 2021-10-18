var box1;

function setup() {
    createCanvas(400, 400);
    
   box1 = createSprite(200,200,50,100)
   box1.shapeColor ="red";
  }
  
  function draw() {
    background("black");

    drawSprites();
  }