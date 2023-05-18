function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(209, 220, 235); //fondo
    strokeWeight(8);
    stroke(0);
    //Cuadrado rojo
    fill(195, 49, 29);
    rect(60, 60, 250, 250);
    //cuadrado negro grande
    fill(0);
    rect(60, 310, 125, 125);
    //rectangulos grises
    fill(188, 197, 205);
    rect(185, 310, 125, 62);
    rect(185, 372, 125, 62);
    //rectangulos gris claros
    fill(227, 227, 225);
    rect(310, 185, 75, 125);
    rect(385, 185, 75, 125);
    rect(310, 310, 150, 62);
    //rectangulo amarillo
    fill(234, 193, 72);
    rect(310, 60, 150, 125);
    //rectangulo azul
    fill(19, 36, 106);
    rect(310, 372, 150, 95);
    noStroke();
    rect(10, 299, 30, 30);
    rect(20, 25, 34, 34);
    //rectangulo pequeño negro
    fill(0);
    rect(189, 434, 120, 37);
    //cuadrado amarillo sin contorno
    noStroke();
    fill(234, 193, 72);
    rect(308, 0, 155, 56);
    rect(0, 370, 56, 180);
    //lineas verticales
    strokeWeight(8);
    stroke(0);
    line(123, 60, 123, 20);
    line(60, 435, 60, 475);
    line(310, 60, 310, 20);
    line(460, 56, 460, 20);
    //lineas horizontales
    line(20, 60, 60, 60);
    line(20, 185, 56, 185);
    line(20, 373, 56, 373);
    line(462, 372, 490, 372);
    //cuadrado gris claro sin contorno
    noStroke();
    fill(227, 227, 225);
    rect(126, 0, 181, 56);
    rect(0, 63, 56, 119);
    //cuadrado rojo sin contorno
    fill(195, 49, 29);
    rect(464, 375, 38, 178);
    //lineas finas verticales
    strokeWeight(2);
    stroke(0);
    line(20, 400, 20, 20);
    line(30, 400, 30, 20);
    line(480, 20, 480, 480);
    line(470, 30, 470, 470);
    line(50, 120, 50, 305);
    line(490, 490, 490, 200);
    line(185, 400, 185, 500);
    line(180, 400, 180, 500);
    line(10, 300, 10, 500);
    //lineas finas horizontales
    line(10, 30, 300, 30);
    line(10, 40, 300, 40);
    line(10, 310, 56, 310);
  }
  