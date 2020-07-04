
import Area from "./pull/Area";
import Plus from "./particle/Plus";
import Zero from "./particle/Zero";
import Minus from "./particle/Minus";
import Glue from "./particle/Glue";

function setPixel(x,y,c) {
    var p=canvas.createImageData(1,1);
    p.data[0]=c.r;
    p.data[1]=c.g;
    p.data[2]=c.b;
    p.data[3]=c.a;
    canvas.putImageData(p,x,y);
}

function randomAdd(particleClass, width, height, n) {
    for(let i = 1; i <= n; i++)
        particles.push(new particleClass([Math.random()*width, Math.random()*height]));
}

let running = true;


// Consts
const acc = 50;
const particleClasses = {
    Plus,
    Zero,
    Minus,
    Glue
};
const particles = [];
const area = new Area(particles, 0.9);

// particles.push(new KeepDistance(new Vector([100,100])));
// particles.push(new KeepDistance(new Vector([300,300])));
// particles.push(new KeepDistance(new Vector([100,300])));


// for(let i = 0; i <= 20; i++) {
//     for(let j = 0; j <= 20; j++) {
//         particles.push(new KeepDistance([300 + i, 300 + j]));
//     }
// }

let frameCount = 0;
let beforeTime = performance.now();
const frame = () => {
    frameCount++;
    //for(let i = 0; i <= acc; i++) {//for(let i = 0; i <= acc*((performance.now() - beforeTime)/(1000**2)); i++) {
    //    area.update(1 / acc);
    //}
    //beforeTime = performance.now();

    if(running) {
        area.update(1 / acc);
        // area.update(1 / acc);
        // area.update(1 / acc);
        // area.update(1 / acc);
        // area.update(1 / acc);
    }

    /*
    const maxMotion = particles.reduce((max, particle) => {
        const motion = Math.sqrt(particle.motion[0]**2 + particle.motion[1]**2);
        return motion > max ? motion : max;
    }, 0);
    */
    
    const maxPressure = particles.reduce((max, particle) => {
        const pressure = particle.pressure;
        return pressure > max ? pressure : max;
    }, 0);

    
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    for(const particle of particles) {
        ctx.beginPath();
        //ctx.fillStyle = `hsl(280,${(particle.pressure / maxPressure) * 100}%,50%)`;
        ctx.fillStyle = `hsl(${(particle.pressure / maxPressure) * 360},100%,50%)`;
        ctx.arc(particle.position[0], particle.position[1], 3, 0, 2*Math.PI);
        ctx.fill();
    }
    

    requestAnimationFrame(frame);
};


// Canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
ctx.fillStyle = "black";

window.addEventListener("resize", e => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

requestAnimationFrame(frame);
setInterval(() => {
    console.log(frameCount);
    frameCount = 0;
}, 1000);

let dragging = false;
canvas.addEventListener("mousedown", event => {
    dragging = true;
    particles.push(new (particleClasses[particleTypeDropdown.value])([event.clientX, event.clientY]));
});
canvas.addEventListener("mousemove", event => {
    if(dragging) {
        particles.push(new (particleClasses[particleTypeDropdown.value])([event.clientX, event.clientY]));
    }
});
canvas.addEventListener("mouseup", event => {
    dragging = false;
});


// Controllers

const particleTypeDropdown = document.getElementById("typeParticle");
Object.keys(particleClasses).forEach(particleClassName => {
    const option = document.createElement("option");
    option.value = particleClassName;
    option.appendChild(document.createTextNode(particleClassName));
    particleTypeDropdown.appendChild(option);
});

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", () => {
    running = !running;
    console.log(running);
    pauseButton.value = running ? "Pause" : "Resume";
});

//RANDOM ADD
// randomAdd(particleClasses.Glue, innerWidth, innerHeight, 50);
// randomAdd(particleClasses.Plus, innerWidth, innerHeight, 100);
// randomAdd(particleClasses.Minus, innerWidth, innerHeight, 200);
// randomAdd(particleClasses.Zero, innerWidth, innerHeight, 50);