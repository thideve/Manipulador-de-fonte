leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(400,400);
    canvas.position(560,150);

   var poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
    }
}

