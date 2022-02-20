function creditos() {

  
  textAlign(CENTER,CENTER)
  background('blue');
  stroke('#53868b')
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
  text("CRÉDITOS",150,20)

  textSize(15)
  stroke(0)
  fill('#ffffff')
  text("Programador:",50,120)
  
 
  textSize (9.3)
  text("Leandro Thales. Aluno do curso de" + "\n" + "engenharia mecânica na Universidade Federal" + "\n" + "do Rio Grande do Norte.",200,120)
  
line(0,150,300,150)
   
 textSize(15)
  stroke(0)
  fill('#ffffff')
  text("Orientadora:",50,190)
  
 
  textSize (9.3)
 text("Raíssa Vanessa. Graduanda em química licenciatura" + "\n" + "pela Universidade Federal do Rio Grande do Norte.",200,190)
 
 image(img[0],140,230,100,100)
 image(img[3],50,230,100,100)
 image(img[2],-20,230,100,100) 
 image(img[1],210,230,100,100) 
       
       
}