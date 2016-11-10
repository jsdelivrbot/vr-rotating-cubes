'use strict';

const positions = [
  [0, -5, 0],
  [-4, -5, 0],
  [4, -5, 0],
  [0, 0, 0],
  [-4, 0, 0],
  [4, 0, 0],
  [0, 5, 0],
  [-4, 5, 0],
  [4, 5, 0],
];

const radius = 15;

let boxes = '';

for (let x = 0; x < positions.length; x += 1) {
  const box = `
  <a-box color="#9db5b5" width="2" height="2" depth="2" position="${positions[x][0]} ${positions[x][1]} ${positions[x][2]}"
    animation="property: rotation; dur: 2000; dir: normal; easing: easeInOutSine; loop:true; to: 180 90 360"
    animation__position="property: position; dur: 2000; dir: alternate; loop: true; to: ${positions[x][0]} ${positions[x][1] + 5} ${positions[x][2]}"
    animation__scale="property: scale; dur: 2000; dir: alternate; loop: true; to: 1.5 1.5 1.5"
    animation__color="property: color; dur: 2000; dir: alternate; loop: true; to: #bf6ae1"></a-box>
  `;
  boxes = boxes.concat(box);
}

document.write(`
  <a-scene>
    <a-sky color="#4d8181"></a-sky>
    ${boxes}
    <a-entity id="camera" position="0 0 ${radius}" rotation="0 0 0">
      <a-camera></a-camera>
    </a-entity>
  </a-scene>
`);

const camera = document.getElementById('camera');

let angle = 0;

setInterval(() => {
  if (angle === 360) {
    angle = 0;
  }

  const radian = angle * (Math.PI / 180);
  const x = radius * Math.sin(radian);
  const z = radius * Math.cos(radian);

  camera.setAttribute('rotation', `0 ${angle} 0`);
  camera.setAttribute('position', `${x} 0 ${z}`);

  angle += 1;
}, 18);
