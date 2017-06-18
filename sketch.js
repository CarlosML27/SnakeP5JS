var snake;
var myScale;
var lastKeyPressed;
var food;

function setup(){
    createCanvas(600, 600);
    snake = new Snake();
    lastKeyPressed = RIGHT_ARROW;
    myScale = 20;
    frameRate(10);
    pickLocation();
}

function draw(){
    background(51);
}

function pickLocation(){
    var columns = floor(width/myScale);
    var rows = floor(height/myScale);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(myScale);
}

function keyPressed(){
    if(keyCode === UP_ARROW && lastKeyPressed !== DOWN_ARROW){
        lastKeyPressed = UP_ARROW;
        snake.changeDirection(0, -1);
    } else if(keyCode === DOWN_ARROW && lastKeyPressed !== UP_ARROW){
        lastKeyPressed = DOWN_ARROW;
        snake.changeDirection(0, 1);
    } else if(keyCode === RIGHT_ARROW && lastKeyPressed !== LEFT_ARROW){
        lastKeyPressed = RIGHT_ARROW;
        snake.changeDirection(1, 0);
    } else if(keyCode === LEFT_ARROW && lastKeyPressed !== RIGHT_ARROW){
        lastKeyPressed = LEFT_ARROW;
        snake.changeDirection(-1, 0);
    }
}