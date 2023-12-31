import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three'

const scene = new Scene();

const camera = new PerspectiveCamera( 75 , window.innerWidth / window.innerHeight , 0.1 , 1000 );

const renderer = new WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new Mesh( geometry, material );
scene.add( cube );

export function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

camera.position.z = 5;
export {scene, camera, renderer}