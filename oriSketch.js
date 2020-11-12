let PALETTE = []
let x, y;
let rad;

let xspeed; // Speed of the shape
let yspeed; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

// Set up canvas with defined color palette and random x,y axis values + circle speed
function setup() {
  createCanvas(500, 500);

  x = random(width);
  y = random(height);
  rad = random(1, 50);
  xspeed = random(1, 20);
  yspeed = random(1, 20);
  ellipseMode(RADIUS);

  PALETTE= [
    color(255,190,11), // yellow-orange
    color(251,86,7), // bright-orange
    color(255,0,110), // bright prink
    color(131,56,236), // purple
    color(58,134,255) // blue
  ]
  noStroke();
  frameRate(300);

  function chooseRandomColor() {
    const randomColor = floor(random(0, PALETTE.length));
    const shapeFillColor = PALETTE[randomColor]
    console.log(randomColor);
  
    stroke(shapeFillColor);
    fill(shapeFillColor);
  }

  chooseRandomColor();
}


function draw() {

    // Choose a randomcolor from our defined palette
    function chooseRandomColor() {
        const randomColor = floor(random(0, PALETTE.length))
        const shapeFillColor = PALETTE[randomColor]
        console.log(randomColor)
    
        noStroke()
        fill(shapeFillColor)
  }

  chooseRandomColor()

  // Draw the circle
  ellipse(x, y, rad, rad);

  // Do the movement math
  x = x + xspeed * xdirection;
  y = y + yspeed * ydirection;

  // Bounce if circle hits canvas edge
  if (x > width - rad || x < rad) {
    xdirection *= -1;
  }

  // Bounce if circle hits canvas edge
  if (y > height - rad || y < rad) {
    ydirection *= -1;
  }
}

// Download the canvas when "Download" button is clicked
function downloadCanvas() {
    saveCanvas('ohwow', 'png');
};

// Do all of the things again when the "Generate New" button is clicked
function generateNew() {
    background("#fff");
    setup();
    draw();
  };
