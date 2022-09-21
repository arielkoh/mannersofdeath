// file -> duplicate and file -> save 
// this sketch first before you 
// start working on it.
//
//
//
// Graph from Data, Line graph example
//
// Slides:
// http://slides.com/sojamo/cid-3-2122/fullscreen#/12/5

  let dataset;

  function preload() {
  // preload our data from our .csv file
  dataset = loadTable("data.csv", "csv", "header");
}

  function setup() {
  // if you add SVG as 3rd parameter and then
  // press s, the canvas will be saved as SVG file
  createCanvas(displayWidth, displayHeight, SVG);
}

  function draw() {
  background(184, 37, 0);
  
    
  //movie titles and year
  textSize(18);
  textFont('inconsolata');
  fill(243, 230, 214);
    
  push();
  let l = 'Saul Bass Movies';
  textStyle(BOLDITALIC);
  text(l, 1465, 40, 330, 150);
  pop();
    
  push();
  let ak = 'Attack (1956)';
  text(ak, 1465, 80, 330, 150);
  pop();
    
  push();
  let ec = 'Edge of the City (1957)';
  text(ec, 1465, 120, 330, 150);
  pop();
    
  push();
  let sj = 'Saint Joan (1957)';
  text(sj, 1465, 160, 330, 150);
  pop();
    
  push();
  let tp = 'The Pride and The Passion (1957)';
  text(tp, 1465, 200, 330, 150);
  pop();
    
  push();
  let cb = 'Cowboy (1958)';
  text(cb, 1465, 240, 330, 150);
  pop();  
  
  push();
  let vo = 'Vertigo (1958)';
  text(vo, 1465, 280, 330, 150);
  pop();
    
  push();
  let nn = 'North by Northwest (1959)';
  text(nn, 1465, 320, 330, 150);
  pop();
    
  push();
  let po = 'Psycho (1960)';
  text(po, 1465, 360, 330, 150);
  pop();
    
  push();
  let ss = 'Spartacus (1960)';
  text(ss, 1465, 400, 330, 150);
  pop();
    
  push();
  let tv = 'The Victors (1963)';
  text(tv, 1465, 440, 330, 150);
  pop();
    
  push();
  let gf= 'Goodfellas (1990)';
  text(gf, 1465, 480, 330, 150);
  pop();
    
  push();
  let cf= 'Cape Fear (1991)';
  text(cf, 1465, 520, 330, 150);
  pop();
    
  push();
  let co= 'Casino (1995)';
  text(co, 1465, 560, 330, 150);
  pop(); 
    
         
  //Manners of Death Labels
  textSize(16);
  textFont('inconsolata');
  fill(243, 230, 214);
  
  push();
  let b = 'Burns';
  text(b, 35, 875, 330, 150);
  pop();
    
  push();
  let c = 'Canon Attacks';
  text(c, 150, 875, 80, 100); 
  pop();

  push();
  let d = 'Drowning';
  text(d, 265, 875, 80, 100);
  pop();
    
  push();
  let e1 = 'Exhaustion';
  text(e1, 385, 875, 80, 100); 
  pop();
    
  push();
  let e2 = 'Explosion';
  text(e2, 518, 875, 80, 100); 
  pop();
    
  push();
  let f = 'Falls';
  text(f, 660, 875, 80, 100); 
  pop();
    
  push();
  let g = 'Gun Wounds';
  text(g, 780, 875, 80, 100);
  pop();
    
  push();
  let ha = 'Heart Attacks';
  text(ha, 910, 875, 80, 100);
  pop();
    
  push();
  let ip = 'Impact';
  text(ip, 1030, 875, 80, 100);
  pop(); 
    
  push();
  let pn = 'Poison';
  text(pn, 1160, 875, 80, 100);
  pop();
    
  push();
  let sw = 'Stab Wounds';
  text(sw, 1290, 875, 80, 100);
  pop(); 
    
  push();
  let sn = 'Strangulation';
  text(sn, 1390, 875, 80, 100);
  pop();   
    
    
  //bottom label title
  push();
  textSize(18);
  textFont('inconsolata');
  textStyle(BOLDITALIC);
  let m = 'Manners of Death';
  fill(243, 230, 214);
  text(m, 680, 950, 330, 150); // Text wraps within text box
  pop();     
    
    
  //line graph
  drawLineGraph({
  dataset: dataset,
  column: 1,
  x: 40,
  y: 30,
  w: width - 400,
  h: height - 300,
  lc:color(255,255,255),
  dc:color(169,247,111),
  thickness: 1.5,
  isCurve: true,
  isDots: true,
  isBackground:true,
  isLabel:true
  });
}

function drawLineGraph(theProps = {}) {
  
  let values = theProps.dataset.getColumn(theProps.column);
  let minValue = min(values); 
  let maxValue = max(values);
let marginTopBottom = 20;
  let x = theProps.x || 20;
  let y = theProps.y || 0;
  let w = theProps.w || (width - marginTopBottom);
  let h = theProps.h || (height - marginTopBottom);
  let bg = theProps.bg || color(255, 40);
  let fg = theProps.fg || color(255, 120);
  let dc = theProps.dc || color(0, 120);
  let bc = theProps.bc || color(0, 120);
  let lc = theProps.lc || color(255);
  let thickness = theProps.thickness || 1;
  let isLabel = theProps.isLabel || true;
  let isCurve = theProps.isCurve || true;
  let isDots = theProps.isDots || true;
  let isBackground = theProps.isBackground || true;

  let spacing = w / (values.length - 1);
  

  // we will calcualte the x and y values for each
  // point first, because we need it later a couple
  // of times.
  let xx = [];
  let yy = [];
  let n = values.length;
  for (let i = 0; i < n; i++) {
    xx[i] = i * spacing;
    yy[i] = map(
      values[i],
      minValue,
      maxValue,
      -marginTopBottom,
      marginTopBottom - h
    );
  }

  push();
  translate(x, y);
  translate(0, h);

  // 1. draw background
  if (isBackground == true) {
    fill(bg);
    rect(0, 0, w, -h);

    // 2. draw grid
    noStroke();
    for (let i = 0; i < n - 1; i++) {
      // fill(255,i%2 == 0 ? 80:40);
      rect(xx[i], 0, 1, -h);
    }
  }

  // 3. draw curved line graph
  noFill();
  stroke(lc);
  strokeWeight(thickness);

  beginShape();
  if (isCurve == true) {
    vertex(xx[0], yy[0]);
  }
  for (let i = 0; i < n; i++) {
    let fn = isCurve == true ? curveVertex : vertex;
    fn(xx[i], yy[i]);
  }
  if (isCurve == true) {
    vertex(xx[n - 1], yy[n - 1]);
  }
  endShape();

  // 4. draw dot / label for each value
  noStroke();

  // finally lets draw the dots and 
  // labels if enabled
  let d = thickness + 6;
  for (let i = 0; i < n; i++) {
    
    push();
    translate(xx[i], yy[i]);
    
    if(isDots == true) {
      fill(bc);
      fill(243, 230, 214);
      ellipse(0, 0, 9, 9);
    }
    
    if (isLabel == true) {
      fill(255)
      rotate(-0.5);
      textSize(15);
      text(values[i], d, -d);
    }
    pop();
  }

  pop();
}


// if you want to use the SVG export 
// option, go to setup and enable SVG mode
function keyPressed() {
  if (key === "s") {
    saveSVG("line-graph.svg");
  }
}