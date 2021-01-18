import React from 'react'
import styled from 'styled-components'
import * as THREE from 'three'


const Container = styled.div`
    position: absolute;
    margin: 0;
    top: 0;
    height: 100%;
    background-color: #000;
    z-index: 999;
`

const Canvas = styled.div`
    width: 100%;
    height: 100%;
`


const Intropage = () => {
    let camera, scene, renderer;
let mouseX = 0;
let mouseY = 0;
let stars = [];

camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 4000);

camera.position.z = 1000;

scene = new THREE.Scene();
scene.add(camera);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

function randomRange(min, max) { 
	return Math.random()*(max-min) + min; 
}

function onMouseMove( event ) {
  // store the mouseX and mouseY position 
  mouseX = event.clientX;
  mouseY = event.clientY;
}

var throttle = function(type, name, obj) {
  var obj = obj || window;
  var running = false;
  var func = function() {
    if (running) { return; }
    running = true;
    requestAnimationFrame(function() {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};
throttle("resize", "optimizedResize");

//TODO fix the pause in animation on resize
window.addEventListener('optimizedResize', function(e){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('mousemove', onMouseMove, false);

function makeParticles() {
  var segments = 16;
  var rings = 16;
  var radius = 5;
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var geometry = new THREE.SphereGeometry(radius, segments, rings);

  for (var zpos = -3000; zpos < 3000; zpos += 20) {
    var star = new THREE.Mesh(geometry, material);
    star.position.x = randomRange(-3000, 3000);
    star.position.y = randomRange(-3000, 3000);
    star.position.z = zpos;
    star.scale.x = star.scale.y = randomRange(0, 2);
    scene.add(star);
    stars.push(star);
  }
}
makeParticles();

function render() {
  requestAnimationFrame(render);
  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    star.position.z += 10;
    star.position.z += mouseY * 0.1;
    if (star.position.z > 1000) {
      star.position.z -= 4000;
    }
  }
  renderer.render(scene, camera);
}
render();
    return (
        <>
        <Container>
            <Canvas />
        </Container>
        </>
    )
}

export default Intropage
