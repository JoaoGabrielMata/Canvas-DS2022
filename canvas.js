var dx, dy, r;
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


//desafio 1
for(var q = 0; q <= 10; q++){ 
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //desafio 3
    c.fillStyle = "#" +  randomColor; //desafio 3
    c.fillRect(dx,dy,50,50);
    dx = Math.floor(Math.random()*500+800) ; //desafio 2
    dy = Math.floor(Math.random()*600) ; //desafio 2
}
for(var r = 0; r <= 10; r++){ 
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //desafio 3
    dx = Math.floor(Math.random()*1000+300) ; //desafio 2
    dy = Math.floor(Math.random()*1500); //desafio 2
    c.beginPath();
    c.moveTo(dx,dy);
    c.lineTo(dx,30);
    c.strokeStyle = "#" + randomColor; //desafio 3
    c.stroke();
}
for(var b = 0; b <= 30; b++){ 
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //desafio 3
    r = Math.floor(Math.random()*10); //desafio 4
    dx = Math.floor(Math.random()*950+400) ; //desafio 4
    dy = Math.floor(Math.random()*750); //desafio 4
    c.beginPath();
    c.arc(dx,dy,r,0, Math.PI*2,false); //desafio 4
    c.strokeStyle = "#" + randomColor; //desafio 3
    c.stroke();
}

//desenhar estrela 
//https://www.tutorialspoint.com/How-to-draw-a-star-by-using-canvas-HTML5
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    c.fillStyle = "#" +  randomColor;
    c.beginPath();
    c.moveTo(108, 0.0);
    c.lineTo(141, 70);
    c.lineTo(218, 78.3);
    c.lineTo(162, 131);
    c.lineTo(175, 205);
    c.lineTo(108, 170);
    c.lineTo(41.2, 205);
    c.lineTo(55, 131);
    c.lineTo(1, 78);
    c.lineTo(75, 68);
    c.lineTo(108, 0);
    c.closePath();
    c.fill();

//desenhar coração
//https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // Exemplo de curvas de Bézier cúbicas
    c.fillStyle = "#" +  randomColor;
    c.beginPath();
    c.moveTo(75,40);
    c.bezierCurveTo(75,37,70,25,50,25);
    c.bezierCurveTo(20,25,20,62.5,20,62.5);
    c.bezierCurveTo(20,80,40,102,75,120);
    c.bezierCurveTo(110,102,130,80,130,62.5);
    c.bezierCurveTo(130,62.5,130,25,100,25);
    c.bezierCurveTo(85,25,75,37,75,40);
    c.fill();

//desenhar batman
//https://codepen.io/travissanon/pen/YEPwGM
    c.beginPath();
    c.moveTo(1000/5, 800/5);
    c.quadraticCurveTo(1000/5, 460/5, 1390/5, 650/5);
    c.quadraticCurveTo(1400/5, 490/5, 1650/5, 650/5);
    c.quadraticCurveTo(1400/5, 250/5, 1300/5, 250/5);
    c.lineTo(1275/5, 350/5);
    c.lineTo(1075/5, 400/5);
    c.lineTo(1060/5, 300/5);
    c.lineTo(1030/5, 360/5);
    c.lineTo(1000/5, 365/5);
    c.lineTo(970/5, 360/5);
    c.lineTo(940/5, 300/5);
    c.lineTo(925/5, 400/5);
    c.lineTo(725/5, 350/5);
    c.lineTo(700/5, 250/5);
    c.quadraticCurveTo(600/5, 250/5, 350/5, 650/5);
    c.quadraticCurveTo(600/5, 490/5, 590/5, 650/5);
    c.quadraticCurveTo(1000/5, 460/5, 1000/5, 800/5);
    c.lineWidth = 2;
    var randomColor = Math.floor(Math.random()*16777215).toString(16); 
    c.fillStyle = "#" + randomColor; 
    c.fill();




//extra
for(var rt = 0; rt <= 10; rt++){
    var randomColor = Math.floor(Math.random()*16777215).toString(16); 
    c.fillStyle = "#" + randomColor; 
    c.fillRect(dx,dy,100,50); 
    dx = Math.floor(Math.random()*500+100) ; 
    dy = Math.floor(Math.random()*600) ; 
}