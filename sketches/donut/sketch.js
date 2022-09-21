//
// file -> duplicate and file -> save
// this sketch first before you
// start working on it.
//
//
//
// Graph from Data, Bar graph example
//
// Slides:
// http://slides.com/sojamo/cid-3-2122/fullscreen#/12/5

let defaultColors;
let dataset;

  function preload() {
  // preload our data from our .csv file
  dataset = loadTable("data.csv", "csv", "header");

  // define colorscheme
  defaultColors = generateColorScheme(245, 33, 55);

  // if you want your own colorset, you need
  // to create an array of colors like so:
  // defaultColors = [color(255,0,0), color(255,255,0)];
  // and of course you need to add more than just 2 colors
  // to array defaultColors
}

  function setup() {
  // if you add SVG as 3rd parameter and then
  // press s, the canvas will be saved as SVG file
  createCanvas(displayWidth, displayHeight, SVG);
}

function draw() {
  background(27, 36, 48);

  let d0 = dataset; // reaw dataset
  let d1 = dataset.sortByColumn(1, DESC); // sorted dataset
  
  push();
  textSize(30);
  let s = 'Manners of Death in Saul Bass Movies from the year 1956-     1991.';
  fill(243, 230, 214);
  text(s, 675, 530, 500, 100); // Text wraps within text box
  pop();

  drawDonut({
    dataset: d1, // use d0 or d1 here
    dataColumn: 1,
    labelColumn: 0,
    x: width / 2,
    y: height / 2,
    d: width / 3,
    thickness: 80,
    isLabel: true,

    colors: defaultColors,
  });
}

function drawDonut(theProps = {}) { 
  let isLabel = theProps.isLabel || true;
  let labelColumn = theProps.labelColumn || 0;

  let x = theProps.x || 0;
  let y = theProps.y || 0;
  let d = theProps.d || 200;
  let thickness = theProps.thickness || 20;
  let colors = theProps.colors || defaultColors;
  let lc = theProps.lc || color(255);

  let values = theProps.dataset.getColumn(theProps.dataColumn);
  let labels = theProps.dataset.getColumn(theProps.labelColumn);
  let n = values.length;

  strokeWeight(thickness);
  strokeCap(SQUARE);
  // now lets draw the donut graph
  push();

  // transform the graph to the location
  // passed to the function by the
  // function caller.
  translate(x, y);
  noFill();

  let start = 0;
  let stop = 0;

  for (let i = 0; i < values.length; i++) {
    // we use the map() function to map values
    // from one range of numbers (our data) to
    // another range of numbers (an angle
    // between 0 and 2*PI)
    start = stop;
    let val = values[i];
    let sumOfAllValues = sum(values);
    stop = start + map(val, 0, sumOfAllValues, 0, TWO_PI);

    // assign color based on index i read from
    // our pre-defined colors array.
    stroke(colors[i]);
    noFill();

    // finally lets draw the arc-segment the value
    // read from our data
    arc(0, 0, d, d, start, stop);

    if (isLabel == true) {
      let r = start + (stop - start) / 2;
      let x = (d + thickness) / 1.8;
      push();
      rotate(r);
      translate(x, 0);
      if (start > HALF_PI && start < PI + HALF_PI) {
        rotate(PI);
        textAlign(RIGHT, CENTER);
      } else {
        textAlign(LEFT, CENTER);
      }
      noStroke();
      fill(243, 230, 214);
      text(labels[i], 0, 0);
      pop();
    }
  }

  for (let i = 0; i < values.length; i++) {}
  pop();
}

// if you want to use the SVG export
// option, go to setup and enable SVG mode
function keyPressed() {
  if (key === "s") {
    saveSVG("donut-graph.svg");
  }
}

////////////////////////////////////////////////////
//
// Helper function and constant variables
// no need to make any changes below.
//
////////////////////////////////////////////////////

function generateColorScheme(theAmountOfNumbers, theIntensity = 0.4) {
  let colors = [];
  let startWithIndex = 7;
  for (let i = 0; i < theAmountOfNumbers; i++) {
    let step = (startWithIndex + i) * theAmountOfNumbers * theIntensity;
    let rIntensity = 0.010;
    let gIntensity = 0.015;
    let bIntensity = 0.020;
    let r = 127 + 127 * sin(step * rIntensity);
    let g = 127 + 127 * sin(step * gIntensity);
    let b = 127 + 127 * sin(step * bIntensity);
    colors[i] = color(r, g, b);
  }
  return colors;
}

function sum(theData) {
  let val = 0;
  for (let i = 0; i < theData.length; i++) {
    val += int(theData[i]);
  }
  return val;
}

p5.Table.prototype.sortByColumn = function (theColumnId, theDir = -1) {
  let data = [];
  let len = this.getRowCount();
  for (let i = 0; i < len; i++) {
    let o = [];
    for (let j = 0; j < this.getColumnCount(); j++) {
      let v = this.getColumn(j)[i];
      if (!isNaN(v)) {
        if (v.toString().indexOf(".") != -1) {
          v = parseFloat(v);
        } else {
          v = parseInt(v);
        }
      }
      o.push(v);
    }
    data.push(o);
  }

  data.sort((a, b) => a[theColumnId] * theDir - b[theColumnId] * theDir);

  let table = new p5.Table();
  this.columns.forEach((el) => table.addColumn(el));
  data.forEach((el, i) => {
    table.addRow();
    el.forEach((v, j) => {
      if (!isNaN(v)) {
        if (v.toString().indexOf(".") != -1) {
          v = parseFloat(v);
        } else {
          v = parseInt(v);
        }
        table.setNum(i, j, v);
      } else {
        table.setString(i, j, v);
      }
    });
  });
  return table;
};

// if you want to use the SVG export 
// option, go to setup and enable SVG mode
function keyPressed() {
  if (key === "s") {
    saveSVG("donut-graph.svg");
  }
}

const DESC = -1;
const ASC = 1;
