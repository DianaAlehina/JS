let sphere =[], Max = 10, Max3 = Max*Max*3, flag = true, counter = 0;
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
let scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3.Black;
const alpha =  Math.PI/4;
const beta = Math.PI/3;
const radius = 150;
const target = new BABYLON.Vector3(0, 0, 0);

const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
let particle = [
    {"id":  0, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  1, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  2, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  3, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  4, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  5, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  6, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  7, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  8, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id":  9, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 10, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 11, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 12, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 13, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 14, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 15, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 16, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 17, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 18, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 19, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 20, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 21, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 22, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 23, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 24, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 25, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 26, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 27, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 28, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 29, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 30, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 31, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 32, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 33, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 34, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 35, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 36, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 37, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 38, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 39, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 40, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 41, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 42, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 43, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 44, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 45, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 46, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 47, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 48, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
    {"id": 49, "x1": 0, "y1": 0, "z1": 0, "x2": 0, "y2": 0, "z2": 0, "x": 0, "y": 0, "z": 0, "r": 0, "m": 0, "color": 0},
];

function randomParticle(particle) {
    let geometry, material;
    for (let i = 0; i < particle.length; i++) {
        particle[i].x1 = Math.random() * Max;
        particle[i].y1 = Math.random() * Max;
        particle[i].z1 = Math.random() * Max;
        particle[i].x2 = 0.5 * particle[i].x1 * particle[i].x1;
        particle[i].y2 = particle[i].y1 * particle[i].y1;
        particle[i].z2 = particle[i].z1 * particle[i].z1;
        particle[i].x = (particle[i].x2 - particle[i].x1)/Max3;
        particle[i].y = (particle[i].y2 - particle[i].y1)/Max3;
        particle[i].z = (particle[i].z2 - particle[i].z1)/Max3;
        let rand = Math.floor(Math.random() * 3);
        if (rand === 0){
            particle[i].r = 1;
            material = new BABYLON.StandardMaterial("myMaterial", scene);
            material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        }
        else if (rand === 1){
            particle[i].r = 1.5;
            material = new BABYLON.StandardMaterial("myMaterial", scene);
            material.diffuseColor = new BABYLON.Color3(0, 1, 0);
        }
        else{
            particle[i].r = 2;
            material = new BABYLON.StandardMaterial("myMaterial", scene);
            material.diffuseColor = new BABYLON.Color3(0, 0, 1);
        }
        sphere[i] = BABYLON.Mesh.CreateSphere("sphere", 32, 1, scene);

        // ?????????????? ??????????
        sphere[i].position.x = particle[i].x1;
        sphere[i].position.y = particle[i].y1;
        sphere[i].position.z = particle[i].z1;
        sphere[i].material = material;
    }
    return particle;
}

particle = randomParticle(particle);

engine.runRenderLoop(function(){
    if (flag){
        for (let i = 0; i < particle.length; i++) {
            sphere[i].position.x += particle[i].x;
            sphere[i].position.y += particle[i].y;
            sphere[i].position.z += particle[i].z;
        }
    } else {
        for (let i = 0; i < particle.length; i++) {
            sphere[i].position.x -= particle[i].x;
            sphere[i].position.y -= particle[i].y;
            sphere[i].position.z -= particle[i].z;
        }
    }
    counter++;
    if (counter >= Max3 && flag ){
        flag = false;
        counter = 0;
    } else if (counter >= Max3 && !flag ){
        flag = true;
        counter = 0;
    }
    scene.render();
});