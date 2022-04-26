var dx, dy, r;
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

for(var q = 0; q <= 10; q++){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    c.fillStyle = "#" +  randomColor;
    c.fillRect(dx,dy,50,50);
    dx = Math.floor(Math.random()*500+800) ;
    dy = Math.floor(Math.random()*600) ;
}
for(var r = 0; r <= 10; r++){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    dx = Math.floor(Math.random()*1000+300) ;
    dy = Math.floor(Math.random()*1500);
    c.beginPath();
    c.moveTo(dx,dy);
    c.lineTo(dx,30);
    c.strokeStyle = "#" + randomColor;
    c.stroke();
}

for(var b = 0; b <= 30; b++){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    r = Math.floor(Math.random()*10);
    dx = Math.floor(Math.random()*950+400) ;
    dy = Math.floor(Math.random()*750);
    c.beginPath();
    c.arc(dx,dy,r,0, Math.PI*2,false);
    c.strokeStyle = "#" + randomColor;
    c.stroke();
}
for(var rt = 0; rt <= 10; rt++){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    c.fillStyle = "#" + randomColor;
    c.fillRect(dx,dy,100,50);
    dx = Math.floor(Math.random()*500+100) ;
    dy = Math.floor(Math.random()*600) ;
}