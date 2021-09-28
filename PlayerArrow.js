class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {
    var position = this.boby.position
    var angle = this.boby.angle

    push()
    translate(position.x,position.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop()

    shoot()
    {
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {x: 5, y: 0})
    }


    if (this.body.velocity.x > 0 && pos.x > 10) {
      var position = [position.x, position.y];
      this.trajectory.push(position);
    }

    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }
}




