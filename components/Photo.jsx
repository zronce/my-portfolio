"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Photo = () => {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const targetZoom = useRef(2);
  const zoomSpeed = 0.01;
  const animationSpeedFactor = 0.5; // Adjust this value to slow down the animation

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkIfMobileOrTablet = () => window.innerWidth <= 1024; // Mobile and tablet threshold
    setIsMobileOrTablet(checkIfMobileOrTablet());

    const handleResize = () => {
      setIsMobileOrTablet(checkIfMobileOrTablet());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileOrTablet) return; // Don't render the model on mobile or tablet

    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
    
    camera.position.set(1, 0, targetZoom.current);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true; // Enable shadows
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7.5).normalize();
    directionalLight.castShadow = true; // Enable shadows for the light
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    const clock = new THREE.Clock();

    loader.load("/assets/model5.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.09, 0.09, 0.09);
      model.position.set(2, -5.5, 0);
      modelRef.current = model;

      // Set the model to cast and receive shadows
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;  // Allow model to cast shadows
          child.receiveShadow = true; // Allow model to receive shadows
        }
      });

      scene.add(model);
      model.rotation.y = -Math.PI / 6;

      const mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta() * animationSpeedFactor; // Apply the speed factor
        if (mixer) mixer.update(delta);
        camera.position.z += (targetZoom.current - camera.position.z) * 0.1;
        renderer.render(scene, camera);
      };
      animate();
    });

    const handleMouseDown = (event) => {
      isDragging.current = true;
      prevMousePos.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event) => {
      if (isDragging.current && modelRef.current) {
        const deltaX = event.clientX - prevMousePos.current.x;

        // Rotate only along the y-axis (left and right)
        modelRef.current.rotation.y += deltaX * 0.01;

        prevMousePos.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleWheel = (event) => {
      targetZoom.current += event.deltaY * zoomSpeed;
      
      // Limit zoom to a maximum of 2
      targetZoom.current = Math.min(2, targetZoom.current);
      
      // Prevent zooming out below 1
      targetZoom.current = Math.max(1, targetZoom.current);
    };

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, [isMobileOrTablet]);

  return !isMobileOrTablet ? (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: "0px",
        right: "0px",
        left: "0px",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        opacity: 0.9,
      }}
    />
  ) : null; // Return null if it's mobile or tablet
};

export default Photo;
