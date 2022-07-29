video="";

function preload(){
video=createVideo("video");

}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video.hide();
}
function draw(){
image(video,0,0,500,400);
if(status!=""){
    objectDetector.detect(video,gotResult);
    for(i=0;i < objects.length;i++){
        document.getElementById("status").innerHTML="status: object detected";
        
        fill("red");
        percent=math.floor(object[i].confidence*100);
        text(object[i].lable=""+percent+"%",object[i].x+15,object[i].x+15);
        nofill();
        stroke("black");
     rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}}
function start(){
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:detecting object";

}
function modelLoaded(){
    console.log("model is loaded");
    video.loop();
    video.speed(1);
    video.volume(0);
    
}
function gotResult(error,result){
if (error){
    console.log(error);

}
else{
    console.log(result);
    object=result;
}

}