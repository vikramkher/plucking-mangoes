class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var body1 = this.sling.bodyA.position;
            var point2 = this.pointB;
            push();
            stroke("black");
            strokeWeight(7);
            line(body1.x,body1.y,point2.x,point2.y)
            pop();
        }
    }
    
}