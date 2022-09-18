// Create a scene
const scene = new THREE.Scene()

// Create a red cube

// Create geometry
const geometry = new THREE.BoxGeometry(1, 1, 1) //1, 1, 1 is the size
// Create material
const material = new THREE.MeshBasicMaterial({ color: 'red'})
// Create mesh. Mesh = geometry + material
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //PerspectiveCamera(fov,aspect-ratio)
camera.position.z = 4
camera.position.y = 1
scene.add(camera)

// Renderer
//Get canvas element
const canvas = document.getElementById('webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)

//Provide Scene and Camera to renderer
renderer.render(scene,camera)