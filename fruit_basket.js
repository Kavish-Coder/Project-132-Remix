img="";

function preload() {
    img=loadImage("fruit-basket.jpg")
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);    
    fill("#ff0000");
    text("Fruit Basket" ,256,36,30,30);
    noFill();
    stroke("#ff0000");
    rect(0,0,630,410);
}

function back() {
    window.location="index.html";
}    
        
function modelLoaded() {
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResults);
    }
    
    function gotResults(error, results) {
        if(error) {
            console.log(error);
        }
        console.log(results);
    }
