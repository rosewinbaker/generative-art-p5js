let PALETTE = []
let x, y;
let rad;

let xspeed; // Speed of the shape
let yspeed; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(500, 500);

  x = random(width)
  y = random(height);
  rad = random(1, 50)
  xspeed = random(1, 20)
  yspeed = random(1, 20)
  ellipseMode(RADIUS);

  PALETTE= [
    color(255,190,11), // yellow-orange
    color(251,86,7), // bright-orange
    color(255,0,110), // bright prink
    color(131,56,236), // purple
    color(58,134,255) // blue
  ]
  noStroke()
  frameRate(300);

  function chooseRandomColor() {
    const randomColor = floor(random(0, PALETTE.length))
    const shapeFillColor = PALETTE[randomColor]
    console.log(randomColor)
  
    
  
    stroke(shapeFillColor)
    fill(shapeFillColor)
  }
  chooseRandomColor()


  
}




function draw() {
  // background(0);
  function chooseRandomColor() {
    const randomColor = floor(random(0, PALETTE.length))
    const shapeFillColor = PALETTE[randomColor]
    console.log(randomColor)
  
    
    noStroke()
    // stroke(shapeFillColor)
    fill(shapeFillColor)
  }
  chooseRandomColor()

  ellipse(x, y, rad, rad);
  // square(x, y, rad);

  // ellipse(width/2,50,80,80);
  // triangle(30, 75, 58, 20, 86, 75);
  // square(30, height/2, 55);
  

  x = x + xspeed * xdirection;
  y = y + yspeed * ydirection;

  if (x > width - rad || x < rad) {
    xdirection *= -1;
  }

  if (y > height - rad || y < rad) {
    ydirection *= -1;
  }

  // square(x, y, 55);

  // ellipse(x, y, rad, rad);
}




// // this creates a dotted line
// fill (0)
// for (var s=0; s<20; s = s+1){ 
//   // run this code each time
//   // s increases from 0 to 19
//   square(s*20, 50, 5, height); //length gives dashes
// }

// // this creates stripes
// fill (0)
// for (var s=0; s<20; s = s+1){ 
//   // run this code each time
//   // s increases from 0 to 19
//   // rect(space between stripes?, y axis, thickness of stripes, how far down the stripes go)
//   rect(s*20, 0, 3, height);
// }