// Particle Background Effect
const canvas = document.createElement('canvas');
document.querySelector('#particles').appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.dx = Math.random() * 2 - 1;
  this.dy = Math.random() * 2 - 1;
}

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Particle.prototype.update = function () {
  if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }
  this.x += this.dx;
  this.y += this.dy;
  this.draw();
};

for (let i = 0; i < 100; i++) {
  particles.push(
    new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 2,
      `rgba(14, 239, 255, ${Math.random()})`
    )
  );
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => particle.update());
  requestAnimationFrame(animate);
}

animate();
