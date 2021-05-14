class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,20, options);
        this.width = 53;
        this.image=loadImage("paper.png")
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x , pos.y , 53, 53);

    }       
}
  