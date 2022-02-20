var xmenu = 50
var ymenu1 = 85
var ymenu2 = 140
var ymenu3 = 195
var largura = 180
var altura = 40


function menudepausa() { 


  
//VOLTAR AO JOGO
  
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
  text("VOLTAR AO JOGO",50,105,180)
 
 //instrucoes 
  
  if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura)
{ 
  
  stroke('black')
  fill(0)
  rect(xmenu,ymenu2,largura, altura,15)

  
}
  stroke('black')
  fill('blue')
  text("INSTRUÇÕES",50,160,180)



// VOLTAR AO MENU 

  if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura)
{ 
  stroke('black')
  fill(0)
  rect(xmenu,ymenu3,largura, altura,15)
  
}
  stroke('black')
  fill('blue')
  text("RETONAR AO MENU PRINCIPAL",50,210,180)
  
  //menu de pausa 
  
strokeWeight(3)
fill('blue')
stroke('black')
textAlign(CENTER,CENTER)
textSize(20)
textFont('Font Style Bold')
text('MENU DE PAUSA',60,30,180)
 
 image(img[2],240,0,100,100)
 image(img[0],240,40,100,100)
 image(img[1],240,80,100,100) 
 image(img[3],240,120,100,100) 
 image(img[2],240,160,100,100)
 image(img[0],240,200,100,100)
 image(img[1],240,240,100,100) 
 image(img[3],240,280,100,100)
 image(img[3],240,-35,100,100)
 
}