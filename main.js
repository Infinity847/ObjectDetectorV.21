var img = [];
var imgat = localStorage.getItem("photo");
var stats = "";
var objects = [];
var v;
function setup() {
    canvas = createCanvas(640,420);
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded() {
console.log("Cocossd is loaded.");
stats = true;
objectDetector.detect(img[imgat],gotResult);
}
function gotResult(error,results) {
if(error) {
    console.error(error);
}
{
objects = results;
if (stats == true) {
    for (i = 0; i < objects.length; i++) {
        if (objects.length > 0) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x,objects[i].y);
    noFill();
    stroke("#FF0000");
    strokeWeight(4);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }else {
            document.getElementById("status").innerHTML = "Status : No Objects Detected";
        }
      
    } }
}
}
function preload() {
    img = [loadImage('Bedroom.jpg'),loadImage('Bottles.jpg'),loadImage('Desk.jpg'),loadImage('StuffedAnimal.jpg'),loadImage('TV&AC.jpg')];
}
function draw() {

    image(img[imgat],0,0,640,420);
    objectDetector.detect(img[imgat],gotResult);
}
function changeimg() {
v = document.getElementById("Images").value;
console.log(v);
if (v == "Bedroom") {
imgat = 0;
}else if (v == "Bottles") {
imgat = 1;
}else if (v == "Desk") {
imgat = 2;
}else if (v == "StuffedAnimal") {
imgat = 3;
}else if (v == "TV&AC") {
imgat = 4;
}
}