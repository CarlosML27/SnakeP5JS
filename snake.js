function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.eat = function(position) {
        var distance = dist(this.x, this.y, position.x, position.y);
        var eaten = false;
        if (distance < 1) {
            this.total++;
            eaten = true;
        }
        return eaten;
    }

    this.changeDirection = function(xspeed, yspeed){
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    this.death = function(){
        for(var counter = 0; counter < this.tail.length; counter++){
            var position = this.tail[counter];
            var distance = dist(this.x, this.y, position.x, position.y);
            if(distance < 1){
                alert("You lost");
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function(){
        for(var counter = 0; counter < this.tail.length; counter++){
            this.tail[counter] = this.tail[counter+1];
        }
        if(this.total > 0){
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }
        this.x = this.x + this.xspeed * myScale;
        this.y = this.y + this.yspeed * myScale;
        this.x = constrain(this.x, 0, width - myScale);
        this.y = constrain(this.y, 0, height - myScale);
    }

    this.show = function(){
        fill(255);
        for(var counter = 0; counter < this.tail.length; counter++) {
            rect(this.tail[counter].x, this.tail[counter].y, myScale, myScale);
        }
        fill(204, 102, 0);
        rect(this.x, this.y, myScale, myScale);
    }
}