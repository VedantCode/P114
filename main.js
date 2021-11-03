function preload(){
    clown_nose = loadImage('transparent-mustache-clipart-7.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw(){
}

function take_snapshot(){
    save('myFilterImage.png');
}