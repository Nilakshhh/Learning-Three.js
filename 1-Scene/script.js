/*const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes={
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z=3;
scene.add(camera);

const canvas= document.querySelector('.webgl');

const renderer = THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


*/
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0xb4ea2d
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 1;

var animate = function() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.05;
  cube.rotation.y -= 0.01;

  renderer.render(scene, camera);
};

animate();
