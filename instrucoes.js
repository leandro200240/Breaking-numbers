function instrucoes() {
 
  textAlign(CENTER,CENTER)
  background('blue');
  stroke('#dbd8a7')
  fill (255,255,255)
  rect (0,0, 80,30)
 
  if (mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 30)
    {stroke(0)
     fill (255,255,255)
     rect (0,0, 80,30)
 }
  fill(0)
  textSize(15)
  noStroke()
  text("voltar",0,15,80)
  
   
  textSize (15)
  stroke(0)
  fill('#ffffff')
  text("INSTRUÇÕES",150,20)

 image(img[2],240,0,100,100)
 image(img[0],240,40,100,100)
 image(img[1],240,80,100,100) 
 image(img[3],240,120,100,100) 
 image(img[2],240,160,100,100)
 image(img[0],240,200,100,100)
 image(img[1],240,240,100,100) 
 image(img[3],240,280,100,100)
 image(img[3],240,-35,100,100)


 fill('fffff')
 stroke(0)
 textSize (9.3)


text('O objetivo do jogo é formar o número que está '+ '\n' + 'aparecendo no canto superior da tela.' + '\n' +  'Para isso, você terá que usar as quatro '+ '\n' + 'operações básicas da matemática de maneira '+ '\n' + 'inteligente nos números que aparecem nos bloquinhos.', 140,80)

text('Você tem 30 segundos para formar o número pedido,' + '\n' + 'assim que o tempo se esgotar o jogo acaba.' + '\n' + 'cada acerto vale 1 ponto. Assim que o número' + '\n' + 'é formado o tempo se reinicia e um novo numero é pedido,' + '\n' +' assim também como novos numeros aparecem nos bloquinhos.', 140,150)

text('Para mudar a operação matemática a ser utilizada' + '\n' + 'aperte a tecla SPACE (ESPAÇO).', 140,200)

text('Para atirar o símbolo matemático e efetuar a operação' + '\n' +  'aperte a tecla (CONTROL).', 140,230)

text('Para movimentar o canhão pressione as teclas do teclado'+ '\n' + 'representadas pelas setinhas. Direita = seta direita;' + '\n' +  'esquerda = seta esquerda; cima = seta para cima; baixo = seta para baixo.', 140,260)


}