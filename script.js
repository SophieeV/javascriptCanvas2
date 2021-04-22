let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//corps de la voiture
ctx.fillStyle = 'green';
ctx.fillRect(110, 25, 100, 60);

ctx.fillRect(20,85, 280, 60);



//cercle
ctx.beginPath();
ctx.lineWidth = '3';
ctx.fillStyle = 'grey';
ctx.arc(260,185,40,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = '3';
ctx.fillStyle = 'grey';
ctx.arc(60,185,40,0,2*Math.PI);
ctx.fill();
