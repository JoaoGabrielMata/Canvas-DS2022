var dx=0, dy=0, // Eixo X e Y
vx=10, vy=10 // Velocidade da Figura
// Tecla1=false
var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')
canvas.height = window.innerHeight - 25  // Altura do Campo
canvas.width = window.innerWidth   - 35 // Largura do Campo

//Animação Eixo X
function AnimaçãoD(){
    requestAnimationFrame(AnimaçãoD)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = '#ff6961'
    c.fillRect (dx,dy,200,200)  // Dimenções da Figura (x,y,Tx,Ty)
 if ((dx+200) > innerWidth){
     vx=-vx
 }
 else if (dx<0) vx=-vx
 dx = dx+vx}  

 function AnimaçãoE(){
    requestAnimationFrame(AnimaçãoE)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = '#ff6961'
    c.fillRect (dx,dy,200,200)}

//Animação Eixo Y
function AnimaçãoB(){
requestAnimationFrame(AnimaçãoB)
c.clearRect(0,0,innerWidth,innerHeight)
c.fillStyle = '#ff6961'
c.fillRect (dx,dy,200,200)  // Dimenções da Figura (x,y,Tx,Ty)
if ((dy+200) > innerWidth){
 vy=-vy
}
else if (dy<0) vy=-vy
dy = dy+vy}  

function AnimaçãoC(){
    requestAnimationFrame(AnimaçãoC)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = '#ff6961'
    c.fillRect (dx,dy,200,200)
}
function AnimaçãoP(){
    requestAnimationFrame(AnimaçãoP)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = '#ff6961'
    c.fillRect (dx,dy,200,200)
}

//Movimentação 
document.addEventListener("keydown", function(e){
    if (e.key == "d"){
    console.log (e.key)
    vx=0
    vx=4
    AnimaçãoD()
    }
}) // Verifica se a tecla escolhida foi pressionada 
document.addEventListener("keyup", function(e){
    if (e.key == "a"){
    console.log (e.key)
    vx=0
    vx=-4
    AnimaçãoE()
    }
})// Verifica se a tecla escolhida foi pressionada 

document.addEventListener("keyup", function(e){
    if (e.key == "s"){
    console.log (e.key)
    vy=0
    vy=4
    AnimaçãoB()
    }
}) // Verifica se a tecla escolhida foi pressionada 
document.addEventListener("keyup", function(e){
    if (e.key == "w"){
    console.log (e.key)
    vy=0
    vy=-4
    AnimaçãoC()
    }
}) // Verifica se a tecla escolhida foi pressionada 

document.addEventListener("keyup", function(e){
    if (e.key == "e"){
    console.log (e.key)
    vy=0
    vx=0
    AnimaçãoP()
    }
}) // Verifica se a tecla escolhida foi pressionada 