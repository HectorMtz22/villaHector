const draw = document.getElementById("villa");
const lienzo = draw.getContext("2d");

const keypress = document.addEventListener("keydown", moveLobo);

let carga = {
  vaca: false,
  cerdo: false,
  pollo: false,
  fondo: false,
};

let fondo = new Image();
fondo.src = "tile.png";

let vaca = new Image();
vaca.src = "vaca.png";
vaca.cant = 5;

let cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.cant = 5;

let pollo = new Image();
pollo.src = "pollo.png";
pollo.cant = 5;

var lobo = new Image();
lobo.src = "lobo.png";
lobo.x = 50;
lobo.y = 50;

function moveLobo(e) {
  switch (e.code) {
    case "ArrowUp":
      posicionLobo.y -= 10;
      dibujar();
      break;
    case "ArrowDown":
      posicionLobo.y += 10;
      dibujar();
      break;
    case "ArrowLeft":
      posicionLobo.x -= 10;
      dibujar();
      break;
    case "ArrowRight":
      posicionLobo.x += 10;
      dibujar();
      break;
  }
}

fondo.addEventListener("load", dibujar);
vaca.addEventListener("load", dibujar);
pollo.addEventListener("load", dibujar);
lobo.addEventListener("load", dibujar);

function aleatorio(min, max) {
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

function cantidad(animal, cantidad) {
  let animalx = [];
  let animaly = [];
  for (var v = 0; v < cantidad; v++) {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 10);
    var x = x * 60;
    var y = y * 40;
    animalx[v] = x;
    animaly[v] = y;
  }
  return { animalx, animaly };
}
let posicionesVaca = cantidad(vaca, vaca.cant);
let posicionesCerdo = cantidad(cerdo, cerdo.cant);
let posicionesPollo = cantidad(pollo, pollo.cant);
let posicionLobo = {
  x: 0,
  y: 0,
};

function dibujarAnimal(animal, posiciones) {
  for (i = 0; i < posiciones.animalx.length; i++) {
    lienzo.drawImage(animal, posiciones.animalx[i], posiciones.animaly[i]);
  }
}

function dibujar() {
  lienzo.drawImage(fondo, 0, 0);
  dibujarAnimal(vaca, posicionesVaca);
  dibujarAnimal(cerdo, posicionesCerdo);
  dibujarAnimal(pollo, posicionesPollo);
  lienzo.drawImage(lobo, posicionLobo.x, posicionLobo.y);
}
