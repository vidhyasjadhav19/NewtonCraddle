class Roof {
    constructor(x, y, width, height){
        
          this.body = Bodies.rectangle(x, y, width, height, {isStactic : true})
          this.width = width;
          this.height = height;
          World.add(world, this.body);

    }

    display(){
        push();
        RectMode(CENTRE);
        fill(128, 127, 126);
        rect(this.body.position.x, this.body.positon.y, this.width, this.height);
        pop();
    }
    
}