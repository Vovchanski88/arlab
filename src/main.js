import './style.css'

import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);
document.body.appendChild(ARButton.createButton(renderer));

scene.add(new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1));

const loader = new GLTFLoader();
loader.load('black_dragon_with_idle_animation.glb', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, -0.2, -1); 
    model.scale.set(0.1, 0.1, 0.1); // налаштуйте під свою модель
    scene.add(model);
});

renderer.setAnimationLoop(() => { renderer.render(scene, camera); });