let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatória();
}

function palavraAleatória() {
  let palavras = ["átomo", "prótons", "neutrons"];
  return random(palavras);
}

function inicializaCores() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  
  let quantidade = map(mouseX,minimo,maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}
