var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

//ESTA DANDO ALGUM ERRO E EU NÃO SEI OQUE É
function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite(200,200)
path.addImage("running",pathImg)
path.velocityY = -1

//Criando menino que corre 
boy = createSprite(200,200)
boy.addAnimation(boyImg)

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,400,100,800)
rightBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges = createEdgeSprites();
boy.collide(edges[3]);
boy.x=World.MouseX


 //Reiniciar o fundo
 if (path.y>0){
 path.y=200
 }


 drawSprites();

 }




