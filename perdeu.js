test = 0


function perdeu() {
  
audio5.play(3)
  
  
  background('blue')
  
  fill('white')
  stroke('black')
  strokeWeight(2)
  rect(0,135,300,30,0) 
  
  
  if(test%2 == 0) { fill('white')
                    frameRate(1)}
  
  else {fill('black')
        frameRate(1)} 
  
 test = test + 1
  
  
  strokeWeight(3)  
  stroke('white')
  textAlign(CENTER,CENTER)
  textSize(15)
  textFont('helvetica')
  text('QUE PENA, O TEMPO ESGOTOU!',150,152) 
  
  stroke(0)
  strokeWeight(3)
  textFont('Georgia')
  fill('blue')
  text("FIM DE JOGO",150,30)
  
  stroke(0)
  strokeWeight(3)
  fill('black')
  rect(50,185,200,30)
  
  textSize(10)
  fill('white')
  stroke('black')
  strokeWeight(2)
  text('pressione qualquer tecla para voltar a jogar',150,200)
  
  
   if(keyIsPressed == true) 
   
   {tela = 10 } 
  
}