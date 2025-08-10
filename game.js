// Basic placeholder game loop
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

function draw() {
  ctx.fillStyle = 'red';
  ctx.font = '48px sans-serif';
  ctx.fillText('The Ultimate Maze Chase!', 100, 300);
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  requestAnimationFrame(loop);
}
loop();
