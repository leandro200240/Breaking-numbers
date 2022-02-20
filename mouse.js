
function mouseClicked() {
 
   
   //botao voltar a jogar (tela de perder)
  
  //if(tela == 4 && mouseX > 75 && mouseX < 75 + 150 &&  mouseY > 185 && mouseY < 185 + 30)
    
    //{tela = 10}
    
   
    
  //botao pause
  
 if(tela==3 && mouseX > 150 && mouseX < 170 && mouseY < 40 && mouseY > 20)
   
{tela=5}
  
  
   
//menu de pausa 

   
    else if(tela == 5 && mouseX > 85 && mouseX < 85 + 180 && mouseY > 195 && mouseY < 195 + 40  ) { tela = 10 }
  
  
  else  if (tela == 5 && mouseX>50 && mouseX<50 + 180 && mouseY>85 && mouseY < 85 + 40) { 
    
   tela = 3 }
    
  else if (tela == 6) {
   
   if ( mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 30) {tela = 5} }
  
  else  if(tela == 5 && mouseX > 50 && mouseX < 50 + 180 && mouseY > 140 && mouseY < 140 + 40)
    
    {tela = 6 }
  
  //jogar
  
 else if(tela == 10 && mouseX>50 && mouseX<50 + 180 && mouseY>85 && mouseY < 85 + 40) 
    
    {tela = 3}
  
  //instrucoes
  
else  if(tela == 10 && mouseX > 50 && mouseX < 50 + 180 && mouseY > 140 && mouseY < 140 + 40)
    
    {tela = 1 }
  
  //creditos
  
else  if(tela == 10 && mouseX > 85 && mouseX < 85 + 180 && mouseY > 195 && mouseY < 195 + 40)
    
    {tela = 2}
  
  // botao voltar 
  
 else if(tela == 1 || tela == 2) {
    
    if ( mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 30) {tela = 10}
  
 
 }
    
  
  
}