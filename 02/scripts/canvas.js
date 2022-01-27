const canvas = document.querySelector('canvas');
/*
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");

// Squares
ctx.fillRect(100,100,600,600);
ctx.fillStyle = "red";
ctx.fillRect(100,100,200,200);
ctx.fillStyle = "orange"
ctx.fillRect(300,300,200,200);
ctx.fillStyle = "hotpink"
ctx.fillRect(500,500,200,200);

// Line
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(100, 100);
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.lineTo(200, 0);
ctx.stroke();
ctx.lineTo(300, 100);
ctx.stroke();
ctx.lineTo(400, 0);
ctx.stroke();
ctx.lineTo(500, 100);
ctx.stroke();
ctx.lineTo(600, 0);
ctx.stroke();
ctx.lineTo(700, 100);
ctx.stroke();
ctx.lineTo(800, 0);
ctx.stroke();
ctx.moveTo(700, 100);
ctx.lineTo(800, 200);
ctx.stroke();
ctx.lineTo(700, 300);
ctx.stroke();
ctx.lineTo(800, 400);
ctx.stroke();
ctx.lineTo(700, 500);
ctx.stroke();
ctx.lineTo(800, 600);
ctx.stroke();
ctx.lineTo(700, 700);
ctx.stroke();
ctx.lineTo(800, 800);
ctx.stroke();
ctx.moveTo(700,700);
ctx.lineTo(600,800);
ctx.stroke();
ctx.lineTo(500,700);
ctx.stroke();
ctx.lineTo(400,800);
ctx.stroke();
ctx.lineTo(300,700);
ctx.stroke();
ctx.lineTo(200,800);
ctx.stroke();
ctx.lineTo(100,700);
ctx.stroke();
ctx.lineTo(0,800);
ctx.stroke();
ctx.moveTo(100,700);
ctx.lineTo(0, 600);
ctx.stroke();
ctx.lineTo(100, 500);
ctx.stroke();
ctx.lineTo(0, 400);
ctx.stroke();
ctx.lineTo(100, 300);
ctx.stroke();
ctx.lineTo(0, 200);
ctx.stroke();
ctx.lineTo(100, 100);
ctx.stroke();

// Arc / Circle

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(700, 700, 50, 0, Math.PI * 2, false);
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();
ctx.closePath()

ctx.beginPath();
ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "hotpink";
ctx.fill();

/*
for (let i =0; i < 89; i++) {

    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height

ctx.beginPath()
ctx.arc(x, y, 30, 0, Math.PI * 2, false)
ctx.strokeStyle = "green"
ctx.stroke()
}
*/

canvas.width = 1000;
canvas.height = 1000;

const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, 1000, 1000);

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.fillStyle = "white";
ctx.moveTo(300,200);
ctx.lineTo(700,200);
ctx.quadraticCurveTo(800,200,800,300);
ctx.lineTo(800,700);
ctx.quadraticCurveTo(800,800,700,800);
ctx.lineTo(300,800);
ctx.quadraticCurveTo(200,800,200,700);
ctx.lineTo(200, 300);
ctx.quadraticCurveTo(200,200,300,200)
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.fillStyle="black";
ctx.fillRect(400,650,200,50);

ctx.beginPath();
ctx.arc(350, 400, 80, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(650, 400, 80, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500,450);
ctx.lineTo(550,550);
ctx.lineTo(450,550);
ctx.lineTo(500,450);
ctx.stroke();
ctx.fill();

ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(650, 400, 30, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(350, 400, 30, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.lineWidth = 20;
ctx.beginPath();
ctx.moveTo(200, 550);
ctx.quadraticCurveTo(300,550,350,800);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(800, 550);
ctx.quadraticCurveTo(700,550,650,800);
ctx.stroke();

ctx.beginPath();
ctx.arc(350, 350, 80, Math.PI+45*Math.PI/180, Math.PI*2-45*Math.PI/180);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(650, 350, 80, Math.PI+45*Math.PI/180, Math.PI*2-45*Math.PI/180);
ctx.stroke();
ctx.closePath();