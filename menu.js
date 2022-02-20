y = 20

var cont = parseInt(tempo/30)

function menu(){

var xmenu = 50
var ymenu1 = 85
var ymenu2 = 140
var ymenu3 = 195
var largura = 180
var altura = 40
  
  audio.loop()

   
   
  // BOTAO INICAR
  
  background('blue'); 
  textAlign(CENTER,CENTER)
  textSize(15) 
  
  if (mouseX>xmenu && mouseX<xmenu + largura && mouseY>ymenu1 && mouseY < ymenu1 + altura) {
    

 stroke('black')
 fill(0)
 rect(xmenu, ymenu1,largura,altura,15)
  
  }
 
  stroke('black')
  strokeWeight(3)
  fill('blue')
  text("INICIAR",50,105,180)
 
 
  
  // BOTAO INFORMAÇOES
  if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura)
{ 
  
  stroke('black')
  fill(0)
  rect(xmenu,ymenu2,largura, altura,15)

  
}
  stroke('black')
  fill('blue')
  text("INSTRUÇÕES",50,160,180)



// BOTAO CREDITOS
if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura)
{ 
  stroke('black')
  fill(0)
  rect(xmenu,ymenu3,largura, altura,15)
  
}
  stroke('black')
  fill('blue')
  text("CRÉDITOS",50,215,180)

// Breaking Numbers 
  textSize(12)
  textFont('Font Style Bold')
  stroke(0)
  fill('blue')
  text("B",-20,y,180)
  fill('green')
  text("R",-10,y,180)
  fill('yellow')
  text("E",0,y,180)
  fill('red')
  text("A",10,y,180)
  fill('blue')
  text("K",20,y,180)
  fill('green')
  text("I",30,y,180)
  fill('yellow')
  text("N",40,y,180)
  fill('red')
  text("G",50,y,180)
  fill('blue')
  
  text("N",70,y,180)
  fill('green')
  text("U",80,y,180)
  fill('yellow')
  text("M",90,y,180)
  fill('red')
  text("B",100,y,180)
  fill('blue')
  text("E",110,y,180)
  fill('green')
  text("R",120,y,180)
  fill('yellow')
  text("S",130,y,180)
  
  
  
  
  
  
  strokeWeight(3)
  line(0,35,300,35)
  line(0,35,0,0)
  line(300,35,300,0) 
  line(0,35,0,300)
  line(0,300,300,300)
  line(300,300,300,0)
  line(0,0,300,0)
 image(img[2],140,15,100,100)
 image(img[0],50,15,100,100)
 image(img[1],-20,15,100,100) 
 image(img[3],210,15,100,100) 

 

   
 } 