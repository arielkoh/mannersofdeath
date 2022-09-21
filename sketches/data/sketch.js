  let burnsdataset;
  let canonattacksdataset;
  let drowningdataset;
  let exhaustiondataset;
  let explosiondataset;
  let fallsdataset;
  let gunwoundsdataset;
  let heartattacksdataset;
  let impactdataset;
  let poisondataset;
  let stabwoundsdataset;
  let strangulationdataset;

  function preload() {
  // burns dataset
  burnsdataset = loadTable("burns.csv", "csv", "header");
  // canon attacks dataset
  canonaattacksdataset = loadTable("canonattacks.csv", "csv", "header");
  // drowning dataset
  drowningsdataset = loadTable("drowning.csv", "csv", "header");
  // exhaustion dataset
  exhaustiondataset = loadTable("exhaustion.csv", "csv", "header");
  // explosion dataset
  explosiondataset = loadTable("explosion.csv", "csv", "header");
  // falls dataset
  fallsdataset = loadTable("falls.csv", "csv", "header");
  // gunwounds dataset
  gunwoundsdataset = loadTable("gunwounds.csv", "csv", "header");
  // heartattacks dataset
  heartattacksdataset = loadTable("heartattacks.csv", "csv", "header");
  // impact dataset
  impactdataset = loadTable("impact.csv", "csv", "header");
  //poison dataset
  poisondataset = loadTable("poison.csv", "csv", "header");
  //stab wounds dataset
  stabwoundsdataset = loadTable("stabwounds.csv", "csv", "header");
  //stab wounds dataset
  strangulationdataset = loadTable("strangulation.csv", "csv", "header");
  }

  function setup() {
  // if you add SVG as 3rd parameter and then
  // press s, the canvas will be saved as SVG file
  createCanvas(displayWidth, displayHeight, SVG);
  drawPlots();
}

  function drawPlots() {
  background(184, 37, 0);
  
  //legend
  textSize(18);
  textFont('inconsolata');
  fill(243, 230, 214);
    
  push();
  let l = 'Saul Bass Movies';
  textStyle(BOLDITALIC);
  text(l, 1440, 40, 330, 150);
  pop();

  let ak = 'Attack (1956)';
  text(ak, 1440, 80, 330, 150);

  let ec = 'Edge of the City (1957)';
  text(ec, 1440, 120, 330, 150);

  let sj = 'Saint Joan (1957)';
  text(sj, 1440, 160, 330, 150);

  let tp = 'The Pride and The Passion (1957)';
  text(tp, 1440, 200, 330, 150);

  let cb = 'Cowboy (1958)';
  text(cb, 1440, 240, 330, 150);
 
  let vo = 'Vertigo (1958)';
  text(vo, 1440, 280, 330, 150);

  let nn = 'North by Northwest (1959)';
  text(nn, 1440, 320, 330, 150);

  let po = 'Psycho (1960)';
  text(po, 1440, 360, 330, 150);

  let ss = 'Spartacus (1960)';
  text(ss, 1440, 400, 330, 150);

  let tv = 'The Victors (1963)';
  text(tv, 1440, 440, 330, 150);

  let gf= 'Goodfellas (1990)';
  text(gf, 1440, 480, 330, 150);

  let cf= 'Cape Fear (1991)';
  text(cf, 1440, 520, 330, 150);

  let co= 'Casino (1995)';
  text(co, 1440, 560, 330, 150);
 
  
  // burnsdataset linegraph
  drawLineGraph({
    dataset: burnsdataset,
    label: "Burns",
    xColumn: 0,
    yColumn: 1,
    x: 30,
    y: 50,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // canonaattacksdataset linegraph
  drawLineGraph({
    dataset: canonaattacksdataset,
    label: "Canon Attacks",
    xColumn: 0,
    yColumn: 1,
    x: 30,
    y: 335,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // drowning linegraph
  drawLineGraph({
    dataset: drowningsdataset,
    label: "Drowning",
    xColumn: 0,
    yColumn: 1,
    x: 30,
    y: 620,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
   // exhaustion linegraph
  drawLineGraph({
    dataset: exhaustiondataset,
    label: "Exhaustion",
    xColumn: 0,
    yColumn: 1,
    x: 370,
    y: 50,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // explosion linegraph
  drawLineGraph({
    dataset: explosiondataset,
    label: "Explosion",
    xColumn: 0,
    yColumn: 1,
    x: 370,
    y: 335,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // falls linegraph
  drawLineGraph({
    dataset: fallsdataset,
    label: "Falls",
    xColumn: 0,
    yColumn: 1,
    x: 370,
    y: 620,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // gunwounds linegraph
  drawLineGraph({
    dataset: gunwoundsdataset,
    label: "Gun Wounds",
    xColumn: 0,
    yColumn: 1,
    x: 710,
    y: 50,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // heart attacks linegraph
  drawLineGraph({
    dataset: heartattacksdataset,
    label: "Heart Attacks",
    xColumn: 0,
    yColumn: 1,
    x: 710,
    y: 335,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
   // impact linegraph
  drawLineGraph({
    dataset: impactdataset,
    label: "Impact",
    xColumn: 0,
    yColumn: 1,
    x: 710,
    y: 620,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // poison linegraph
  drawLineGraph({
    dataset: poisondataset,
    label: "Poison",
    xColumn: 0,
    yColumn: 1,
    x: 1050,
    y: 50,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // stab wounds linegraph
  drawLineGraph({
    dataset: stabwoundsdataset,
    label: "Stab Wounds",
    xColumn: 0,
    yColumn: 1,
    x: 1050,
    y: 335,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
  
  // strangulation linegraph
  drawLineGraph({
    dataset: strangulationdataset,
    label: "Strangulation",
    xColumn: 0,
    yColumn: 1,
    x: 1050,
    y: 620,
    w: width - 1500,
    h: height - 900,
    lc: color(255, 255, 255),
    dc: color(169, 247, 111),
    thickness: 1.5,
    isCurve: true,
    isDots: true,
    isBackground: true,
    isLabel: true,
  });
}

function drawLineGraph(theProps = {}) {
  let values = theProps.dataset.getColumn(theProps.yColumn);
  let minValue = min(values); 
  let maxValue = max(values);
  
  let labels = theProps.dataset.getColumn(theProps.xColumn);
  
  let x = theProps.x || 0;
  let y = theProps.y || 0;
  let w = theProps.w || 400;
  let h = theProps.h || 300;
  let bg = theProps.bg || color(255, 40);
  let fg = theProps.fg || color(255, 120);
  let dc = theProps.dc || color(0, 120);
  let bc = theProps.bc || color(0, 120);
  let lc = theProps.lc || color(255);
  let thickness = theProps.thickness || 1;
  let isLabel = theProps.isLabel || false;
  let isCurve = theProps.isCurve || false;
  let isDots = theProps.isDots || false;
  let isBackground = theProps.isBackground || false;
  let label = theProps.label || "";

  let spacing = w / (values.length - 1);
  let marginTopBottom = 24;
  
  // y position for labels (e.g. years)
  let labelsY = marginTopBottom * 0.5;
  //manner of death
  push();
  textSize(14);
  textFont("inconsolata");
  textStyle(BOLDITALIC);
  fill(243, 230, 214);
  text(label, x, y - marginTopBottom, w, h); // Text wraps within text box
  pop();


  // we will calculate the x and y values for each
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
    // label per data point
    push();
    noStroke();
    fill(255);
    textSize(9);
    textAlign(CENTER);
    text(labels[i], xx[i], labelsY);
    pop();
  }
  if (isCurve == true) {
    vertex(xx[n - 1], yy[n - 1]);
  }
  endShape();

  // 4. draw dot / label for each value
  noStroke();

  // finally lets draw the dots and 
  // labels if enabled
  let d = thickness + 3;
  for (let i = 0; i < n; i++) {
    
    push();
    translate(xx[i], yy[i]);
    
    if(isDots == true) {
      fill(255);
      ellipse(0, 0, d + 4, d + 4);
      fill(255);
      ellipse(0, 0, d, d);
    }
    
    if (isLabel == true) {
      fill(255)
      rotate(-0.5);
      textSize(7);
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