const ROWS = 70;
const SIZE = 10;
const matrix = new Array(ROWS);

function parseSeed(seed) {
  return seed.split("").map((letter) => !!letter.match(/[aeiouy]/i))
}

let seedX = crypto.getRandomValues(new Uint8Array(ROWS)).map(v => v%2)
let seedY = crypto.getRandomValues(new Uint8Array(ROWS)).map(v => v%2)

console.log(seedX)
console.log(seedY)

function drawGrid(forEachPoint) {
  for(let x = 0; x < seedX.length; x++) {
    for(let y = 0; y < seedY.length; y++) {
      forEachPoint(x * SIZE, y * SIZE, x, y)
    }
  }
}

function setup() {
  createCanvas(ROWS * SIZE, ROWS * SIZE);
}

function draw() {
  if (frameCount%10 === 1) {
    seedX = crypto.getRandomValues(new Uint8Array(ROWS)).map(v => v%2)
    seedY = crypto.getRandomValues(new Uint8Array(ROWS)).map(v => v%2)
  }
  
  
  background(81);
  
  stroke("white")
  strokeWeight(1);
  drawGrid((x, y, i, j) => {
    
    if (seedX[i] && j%2) {
      line(x, y, 
         x, 
         y  + SIZE  
        )
    }
    
    if (!seedX[i] && !(j%2)) {
      line(x, y, 
         x, 
         y  + SIZE  
        )
    }
    
    
    if (seedY[j] && i%2) {
      line(x, y, 
         x + SIZE, 
         y  
        )
    }
    
    if (!seedY[j] && !(i%2)) {
      line(x, y, 
         x + SIZE, 
         y  
        )
    }
    
    
    
  })
  
  
}
