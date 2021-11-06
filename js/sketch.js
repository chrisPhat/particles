const particles = [];

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    const particlesLength = Math.floor(window.innerWidth / 20);
    for(let i = 0; i < particlesLength; i++){
        particles.push(new Particle)
    }
}

function draw() {
    background('rgba(109,104,117, 0.2)');
    particles.forEach((p, index)=>{
        p.draw();
        p.update();
        p.checkParticles(particles.slice(index));
    })
    
    // stroke('rgb(80, 80, 80)');
    // fill('rgba(255,255,255,0.2)');
    // ellipse((width/2)-100, height/2, 80);
    // ellipse(width/2, height/2, 80);
    // ellipse((width/2)+100, height/2, 80);
}

class Particle {
   constructor(){
       this.pos = createVector(random(width), random(height));
       this.vel = createVector(random(-2, 2), random(-2, 2));
       this.size = 5;
   }

   update(){
       this.pos.add(this.vel);
       this.edges();
   }

   draw(){
       noStroke();
       fill('rgba(255,255,255,0.1)');
       circle(this.pos.x, this.pos.y, this.size)
   }

   edges(){
       if(this.pos.x < 0 || this.pos.x > width){
        this.vel.x *= -1;
       }

       if(this.pos.y < 0 || this.pos.y > height){
        this.vel.y *= -1;
       }
   }

   checkParticles(particles){
    particles.forEach(particle =>{
        const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

        if(d < 150){
            stroke('rgba(255, 255, 255, 0.1)');
            line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
        }
    })
   }
}
