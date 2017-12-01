


var top10Data = [{
    "Country": "Mexico\n548k",
    "Color": "#586994", 
    "Number": "548000",
    "Percent": "79.4"
  },
  {
    "Country": "El Salvador\n26k",
    "Color": "#7D869C",
    "Number": "25900",
    "Percent": "3.7"
  },
  {
    "Country": "Guatemala\n17k",
    "Color": "#A2ABAB",
    "Number": "17700",
    "Percent": "2.6"
  },
  {
    "Country": "Honduras\n16k",
    "Color": "#E5E8B6",
    "Number": "16100",
    "Percent": "2.3"
  },
  {
    "Country": "Peru\n7.4k",
    "Color": "#B4C4AE",
    "Number": "7420",
    "Percent": "1.1"
  },
  {
    "Country": "South Korea\n7.3k",
    "Color": "#28464B",
    "Number": "7310",
    "Percent": "1.1"
  },
  {
    "Country": "Brazil\n6k",
    "Color": "#90A955",
    "Number": "5780",
    "Percent": "0.8"
  },
  {
    "Country": "Ecuador\n5.5k",
    "Color": "#AAADC4",
    "Number": "5460",
    "Percent": "0.8"
  },
  {
    "Country": "Colombia\n5k",
    "Color": "#68534D",
    "Number": "5020",
    "Percent": "0.7"
  },
  {
    "Country": "Argentina\n4k",
    "Color": "#CE8D66",
    "Number": "3970",
    "Percent": "0.6"
  }, {
    "Country": "Philippines\n4k",
    "Color": "#550000",
    "Number": "3880",
    "Percent": "0.6"
  }

];

var scaleValue = 1;
var canvasMax = 400;

var graphScale = 20;

function setup() {
  var cWidth = document.getElementById('canvasContainer').clientWidth;

  var myCanvas = createCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
  myCanvas.parent('canvasContainer');

}

function draw() {

  push();
  noStroke();
  scale(scaleValue);

  push();
  translate(canvasMax / 2, canvasMax / 2);
  background('#FFF');

  textAlign(CENTER, CENTER);

    fill(top10Data[0].Color);
  var counter = 0;
  var radius = 150;
  while(counter < top10Data.length){
    push();
      if(counter <=0){
        translate(0, 0);
      }else{
        translate(radius*cos(radians(counter*36)), radius*sin(radians(counter*36)));
      }
      fill(top10Data[counter].Color);
      ellipse(0, 0, Math.log10(top10Data[counter].Number) * graphScale, Math.log10(top10Data[counter].Number) * graphScale);
      fill('#000000');
      text(top10Data[counter].Country, 0, 0);
    counter = counter + 1;
    pop()
  }

//   fill(top10Data[0].Color);
//   ellipse(0, 200, Math.log10(top10Data[0].Number) * graphScale, Math.log10(top10Data[0].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[0].Country, 0, 200)

//   fill(top10Data[1].Color);
//   ellipse(-100, 310, Math.log10(top10Data[1].Number) * graphScale, Math.log10(top10Data[1].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[1].Country, -100,310)

//   fill(top10Data[2].Color);
//   ellipse(-160, 210, Math.log10(top10Data[2].Number) * graphScale, Math.log10(top10Data[2].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[2].Country, -160, 210)

//   fill(top10Data[3].Color);
//   ellipse(-60, 400, Math.log10(top10Data[3].Number) * graphScale, Math.log10(top10Data[3].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[3].Country,-60, 400)

//   fill(top10Data[4].Color);
//   ellipse(-60, 100, Math.log10(top10Data[4].Number) * graphScale, Math.log10(top10Data[4].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[4].Country, -60, 100)

// fill(top10Data[5].Color);
//   ellipse(-150, 150, Math.log10(top10Data[5].Number) * graphScale, Math.log10(top10Data[5].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[5].Country, -150,150)

// fill(top10Data[6].Color);
//   ellipse(100, 290, Math.log10(top10Data[6].Number) * graphScale, Math.log10(top10Data[6].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[6].Country, 100, 290)

//   fill(top10Data[7].Color);
//   ellipse(-100, 225, Math.log10(top10Data[7].Number) * graphScale, Math.log10(top10Data[7].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[7].Country, -100,225)

//   fill(top10Data[8].Color);
//   ellipse(100, 250, Math.log10(top10Data[8].Number) * graphScale, Math.log10(top10Data[8].Number) * graphScale);
//   fill('#000000');
//   text(top10Data[8].Country, 100, 250)
  
  pop();

}


function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').clientWidth;
  var cHeight = document.getElementById('canvasContainer').clientHeight;
  scaleValue = min(canvasMax, cWidth) / canvasMax;
  resizeCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
}