NoseX = 0;
NoseY = 0
function preload() {
clown_nose= loadImage("https://i.postimg.cc/wM48Z7tj/clown-nose-clipart-43-removebg-preview.png");
clown_hair = loadImage("https://i.postimg.cc/DyQYSWfJ/th-removebg-preview-2.png");
clown_lips = loadImage("https://o.remove.bg/downloads/078d8f07-9815-4fcc-9b1b-8aeab1fbd635/th-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {

    if(results.length > 0){
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x)
        console.log("nose Y = " + results[0].pose.nose.y)
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
    }
}

function modelLoaded() {
console.log("PoseNet is Initialized :)");
}



function draw () {
    image(video, 0, 0, 300, 300);
    fill(100, 200, 3);
    stroke(40, 50, 60);

    image(clown_lips, NoseX - 35, NoseY + 2, 70, 30);
}

function take_snapshot(){
    
    save('Clown_nose_Selfie.png');
}