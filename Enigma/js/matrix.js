// Un codepen muy chulo

var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');
var fontSize = 16;
var chars = generateChars();
var columns;
var drops; 
var drawnToBottom;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;



function generateChars() {
  var chars = '0123456789';
  for (var i = 0; i <= 55; i++) {
    chars += String.fromCharCode(i + 65382);
  }
  
  return chars.split('');
}


function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.round(canvas.width / fontSize);
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  drawnToBottom = false;
}


function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
	
  ctx.fillStyle = '#515259';
  ctx.font = 'bold ' + fontSize + 'px AuxMono-Regular';

  var dropCount = drops.length;
  var charCount = chars.length;

  for (var i = 0; i < dropCount; i++) {
    var text = chars[Math.floor(Math.random() * charCount)];
    var rowNum = drops[i] * fontSize;
    ctx.fillText(text, i * fontSize, rowNum);

    if (rowNum > canvas.height) drawnToBottom = true;

    if ((!drawnToBottom && Math.random() > 0.925) || (drawnToBottom && Math.random() > 0.95)) drops[i] = 0;

    drops[i]++;
  }
}



window.onresize = function() {
    initCanvas();  
    ctx.fillRect(0, 0,  ctx.width,  ctx.height);
  };
  

initCanvas();
setInterval(draw, 45);