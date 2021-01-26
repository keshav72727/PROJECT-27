class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var opt={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.04,
            length:10
        }
        this.rope=Constraint.create(opt);
        World.add(world,this.rope);
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(5);
        stroke("yellow");

        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        var Anchor2X=pointB+this.offsetX;
        var Anchor2Y=pointB+this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}