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
        if(distance < 1){
            this.total++;
            eaten = true;
        }
        return eaten;
    }
}