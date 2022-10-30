const scene = new THREE.Scene();

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
    canvas: canvas
})

renderer.render(scene, camera);