const ROWS  = 100;
const CELLS = ROWS*ROWS;
const SIZE = 20;
const matrix = new Array(ROWS);

function parseSeed(seed) {
  return seed.split("").map((letter) => !!letter.match(/[aeiouy]/i))
}

let seed = crypto.getRandomValues(new Uint8Array(CELLS)).map(v => v%4)

console.log(seed)

function drawGrid(forEachPoint) {
  let index = 0;
  for(let x = 0; x < ROWS; x++) {
    for(let y = 0; y < ROWS; y++) {
      forEachPoint(x * SIZE, y * SIZE, x, y, index)
      index++;
    }
  }
}

function setup() {
  createCanvas(ROWS * SIZE, ROWS * SIZE);
  
  background(81);
  
  stroke("white")
  strokeWeight(1);
  drawGrid((x, y, i, j, cellIndex) => {
    
    const dir = seed[cellIndex];
    
    if (dir === 0) {
      line(x, y, x , y - SIZE)
    }
    
    if (dir === 1) {
      line(x, y, x + SIZE, y)
    }
    
    if (dir === 2) {
      line(x, y, x , y - SIZE)
    }
    
    if (dir === 3) {
      line(x, y, x - SIZE, y)
    }
    
  })
}

function draw() {

}
