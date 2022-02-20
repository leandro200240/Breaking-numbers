
var cont=parseInt(tempo/30)
var tempo = 0 
var tela = 10
var imgca,imgpa
var audio,audio2, audio3, 
 img = []


function preload() {
  audio4 = createAudio('audios/EXPLOSI3.wav')
  audio2 =  createAudio('audios/116438__eelke__car-squeak-chair-vibrating-upclose.mp3')
  audio3 = createAudio('audios/335908__littlerainyseasons__correct.mp3')
  audio = createAudio('audios/Track06.mp3')
  audio5 = createAudio('audios/135831__davidbain__end-game-fail.wav')
  audio6 = createAudio('audios/211102__qubodup__time-running-out.flac')
  audio7 = createAudio('audios/619840__eponn__achievement-accomplish-jingle-app-ui.wav')
  img[2] = loadImage('imagens/sinal de divisao.png')
  img[0] = loadImage('imagens/sinal de +.png')
  img[3] = loadImage('imagens/sinal de mult.png')
  img[1] = loadImage('imagens/sinal de -.png')
  imgca = loadImage('imagens/canhaooo.png')
  imgpa = loadImage('imagens/pause.jfif')
}

function setup() {
  
  createCanvas(300, 300)
  frameRate(30); 


}

function draw() {
  
  
  
  background(220)
  
  if(tela==3) {
  tempo = tempo +1
  cont = parseInt(tempo/30)
  }
  
  if(tela==10) {
    
     tempo = 0
     frameRate(30)
     n1 = parseInt(random(0,9));
     n2 = parseInt(random(1,9));
     n3 = parseInt(random(1,9));
     soma = 0
     pontos = 0   
     
     op = [n1*n2*n3, n1 + n2 + n3, (n1 + n2)*n3, (n3 + n2)*n1, (n2 + n3)*n1, (n1 + n3)*n2,  (n1 - n2)*n3,(n1 - n3)*n2, (n2 - n3)*n1, (n3 - n2)*n1, n1 - n2 - n3, (n1 + n2) - n3,(n2 + n3) - n1, (n2 + n2) - n3, n1 + n1 + n1, n2 + n2 + n2, n3 + n3 + n3, (n1 + n2)/n3, (n3 + n2)/n2, (n3 + n1)/n2, (n1 + n1)/n3, (n2 + n2)/n3, (n3 + n3)/n2, (n2 + n2)/n3]

 k = random(op)                   


   
  }
  
  //menu 
  
if (tela == 10) {
  
  menu()    }
 
  //instrucoes
  
if (tela == 1) {instrucoes()}
  
  //creditos
  
if (tela == 2) {creditos()}  
  
  //jogar
  
  if (tela ==3) {jogar()}
  
  // tela de perda
  
  if (tela == 4) {perdeu()
              
                  
    }
   
  if(tela==5) {menudepausa()
              
    }
  
  if(tela==6) {instrucoespause()
              
    }
  
  
 if(k == soma) { 
    
   n1 = parseInt(random(0,9))
   n2 = parseInt(random(1,9))
   n3 = parseInt(random(1,9))
   soma = 0
   tempo = 0
   k = random(op)
   
    }
  
 

}