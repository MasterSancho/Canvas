var handl;
function test() {
  handl = setInterval("draw()", 1000);
}
function clean() {
  var canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  if (!radiusValid()) return;
  clean();
  var radius = document.getElementById("radius").value;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 75, radius, 0, 2 * Math.PI);
  ctx.stroke();
  calcVolume();
  document.getElementById("radius").value = 1 * radius + 5;
  if (radius > 70) clearInterval(handl);
}

function calcVolume() {
  var radius = document.getElementById("radius").value;
  console.log((Math.pow(radius, 3) * 4 * Math.PI) / 3);
  document.getElementById("volume").innerHTML =
    (Math.pow(radius, 3) * 4 * Math.PI) / 3;
}

function radiusValid() {
  var radius = document.getElementById("radius").value;
  return !isNaN(radius);
}
