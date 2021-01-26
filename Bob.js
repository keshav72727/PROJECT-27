class Bob{
    constructor(x,y,radius){
        var opt={
            isStatic:true,
            'restituion':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,radius,opt);
       
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
}