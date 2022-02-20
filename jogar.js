
pontos = 0
k = 0
soma = 0
e = 150
u = 150
t = e +35
w = u +5
v = 0


npontos = false
estadodedisparo = false
colisao = false
colisaox = false 
colisaoy = false 
simb = false



function jogar() { 

  audio.stop()
  background('white')
  
  //tempo
  
  textSize(10)
  strokeWeight(2)
  stroke('black')
  fill('white')
  textFont('Georgia')
  text("Tempo:",25,21)
  
  fill('white')
  strokeWeight(2)
  stroke('black')
  rect(50,15,40,12,3)
  
  strokeWeight(1)
  fill('black')
  text(cont,70,20)
  
   
  // canhao
  
  image(imgca,e,u,50,50)
  
 
 if (keyIsDown(LEFT_ARROW) && e >= 10 )
     
  { e = e -5}
  
 if (keyIsDown(RIGHT_ARROW) && e <= 180)
     
 { e = e +5}
  
 if (keyIsDown(UP_ARROW)&& u >= 100)
     
  {  u = u -5 }
  
 if (keyIsDown(DOWN_ARROW) && u <= 215)
     
    { u = u + 5}
  


//disparo 
  
if(keyIsDown(CONTROL) && estadodedisparo == false) {
  
  t = e +25
  w = u -10
  estadodedisparo = true
}
  
if(estadodedisparo) {
  
  image(img[v],t,w,40,40) 
  t = t +5
  audio4.play()
  if(t>300) {estadodedisparo = false
             audio4.stop() }
             
}
   
  
  //blocos com numeros 
  
  stroke('white')
  fill(0)
  rect(240,100,50,20,0)
  rect(240,160,50,20,0)
  rect(240,220,50,20,0)
  
  //numeros nos blocos 
  
  fill('white')
  stroke('black')
  text(n2,265,170)
  text(n1,265,110)
  text(n3,265,230)


//escolha da operacao
  
  
if(keyIsDown(32) && simb == false)

{ simb = true}
  
if (simb) 
  
{ if(v == 3) {v = -1}
  v = v +1
  simb = false
}
  
//operacao sendo utilizada
  
fill('white')
stroke('black')
strokeWeight(2)
rect(147,270,25,25,5 )
    
image(img[v], 130,255,60,60)   
  
// operacoes
  
  
if(t==240  && w >140 && w < 165 && colisao == false) {
    
    colisao = true
    
  }
  
  if(colisao)

  {
    if (v == 0) 
    
  soma = soma + n2 
   
   if(v == 3)
     
     soma = soma*n2
   
    
   if(v == 1)
     
     soma = soma - n2
   
   if(v == 2) 
     
     soma = soma/n2
   
    
  colisao = false }
  
  
if(t==240 && w >200 && w < 225 && colisaox == false) {
       
    colisaox = true
    
  }
  
  if(colisaox)

  {
    
    if (v == 0) 
    
  soma = soma + n3 
   
   if(v == 3)
     
     soma = soma*n3
   
   if(v == 1)
     
     soma = soma - n3
   
   if(v == 2) 
     
     soma = soma/n3
    
  colisaox = false }
    
  
   
if(t==240 && w >80 && w < 105 && colisaoy == false) {
    
        
    colisaoy = true
    
  }
  
  if(colisaoy)

  {
    
  if (v == 0) 
    
  soma = soma + n1 
   
   if(v == 3)
     
     soma = soma*n1
   
   if(v == 1)
     
     soma = soma - n1
   
   if(v == 2) 
     
     soma = soma/n1
    
  colisaoy = false }
    
  
  

//botao pause 
  
image(imgpa,150,20,20,20)

  
  
//interacao com os blocos 
  
  
strokeWeight(1)  
fill(0)    
text(soma,275,40)


  
  
if(k == soma && npontos == false) 
  
  { npontos = true 
   } 
  
if(npontos) 
    
   { pontos++
    npontos = false
    audio3.play()} 
   

  
textSize(10)
strokeWeight(2)
stroke('black')
fill('white')
text('Número pedido',40,50)
  
fill('white')
stroke('black')
strokeWeight(2)
rect(20,60,30,30,8 )

strokeWeight(1)
fill(0)

  
text(k,35,75)
  
  
//pontos 
   
   textSize(10)
   strokeWeight(2)
   stroke('black')
   fill('white')
   text("Pontos:",230,21)
   
   fill('white')
   strokeWeight(2)
   stroke('black')
   rect(255,15,40,12,3)
  
   strokeWeight(1)
   fill('black')
   text(pontos,275,20)
 

  
// troca para a tela de perder 
  
if (cont == 30) {  tela = 4 }

//som do canhao andando  
 
if ( keyIsPressed === true && (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW))
      
      audio2.play()

else 
  
  audio2.stop()
  
// tempo esgotando
  
if(cont >= 20 && cont <= 30 && tela == 3)
  
audio6.play()
  
else 
  
audio6.stop()
}