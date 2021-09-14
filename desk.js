img="";

status="";
function preload() {
    img=loadImage("desk.jpg")
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
    text("Desk" ,256,36,30,30);
    noFill();
    stroke("#ff0000");
    rect(50,30,500,300);
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