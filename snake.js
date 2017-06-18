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
}