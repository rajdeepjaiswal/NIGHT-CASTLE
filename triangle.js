class Triangle
{
    constructor(x,y,sides,size)
    {
        var options=
        {
            isStatic:true,
            angle:PI/2
        }
        this.body = Bodies.polygon(x,y,sides,size,options)
        this.color = "black";
        World.add(world,this.body);
    }
  display()
    {
        fill(this.color);
        var ver = this.body.vertices;
        triangle(ver[0].x,ver[0].y,ver[1].x,ver[1].y,ver[2].x,ver[2].y);
    }
}

