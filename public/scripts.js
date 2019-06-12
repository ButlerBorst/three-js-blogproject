var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 0.1, 1000 );

		camera.position.z = .3;
		camera.position.y = .05;
		camera.position.x = 0;

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
		renderer.setClearColor("#DDDDDD");
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );


var controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.25;
		controls.enableZoom = true;


var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
		keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
		fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
		backLight.position.set(100, 0, -100).normalize();

		scene.add(keyLight);
		scene.add(fillLight);
		scene.add(backLight);

var ourObj;
var ourObj2;
var ourObj3;


var loader = new THREE.GLTFLoader().setPath( '/assets/' );
					loader.load( 'JustLogo.gltf', function ( gltf ) {
						scene.add( gltf.scene );
            ourObj = gltf.scene
					});

var loader2 = new THREE.GLTFLoader().setPath( '/assets/' );
					loader.load( 'JustSphere.gltf', function ( gltf ) {
						scene.add( gltf.scene );
            ourObj2 = gltf.scene
					});

var loader3 = new THREE.GLTFLoader().setPath( '/assets/' );
					loader.load( 'Textupdated.gltf', function ( gltf ) {
						scene.add( gltf.scene );
            ourObj3 = gltf.scene
					});

var animate = function () {
	requestAnimationFrame( animate );

  ourObj.rotation.y -= .01;
  // ourObj2.rotation.x -= .005;
  ourObj2.rotation.y -= .01;
  // ourObj2.rotation.z -= .005;
  controls.update();
	renderer.render(scene, camera);
};

animate();
