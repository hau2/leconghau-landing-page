'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    camera.position.z = 35;

    const N = 400;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const vel: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 70;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
      sizes[i] = Math.random() * 2.5 + 0.5;
      vel.push({
        x: (Math.random() - 0.5) * 0.012,
        y: (Math.random() - 0.5) * 0.012,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0x00f0ff) },
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        varying float vAlpha;
        uniform float uTime;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (180.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
          vAlpha = 0.3 + 0.3 * sin(uTime * 0.5 + position.x * 0.3);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        void main(){
          float d = length(gl_PointCoord - 0.5);
          if(d > 0.5) discard;
          float glow = 1.0 - smoothstep(0.0, 0.5, d);
          gl_FragColor = vec4(uColor, glow * vAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const maxL = 600;
    const lGeo = new THREE.BufferGeometry();
    const lPos = new Float32Array(maxL * 6);
    const lCol = new Float32Array(maxL * 6);
    lGeo.setAttribute('position', new THREE.BufferAttribute(lPos, 3));
    lGeo.setAttribute('color', new THREE.BufferAttribute(lCol, 3));
    lGeo.setDrawRange(0, 0);

    const lMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lGeo, lMat);
    scene.add(lines);

    let mx = 0,
      my = 0;

    function resize() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const w = (hero as HTMLElement).clientWidth,
        h = (hero as HTMLElement).clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mat.uniforms.uTime.value = t;

      const p = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < N; i++) {
        p[i * 3] += vel[i].x;
        p[i * 3 + 1] += vel[i].y;
        p[i * 3 + 2] += vel[i].z;
        if (Math.abs(p[i * 3]) > 35) vel[i].x *= -1;
        if (Math.abs(p[i * 3 + 1]) > 22) vel[i].y *= -1;
        if (Math.abs(p[i * 3 + 2]) > 12) vel[i].z *= -1;
      }
      geo.attributes.position.needsUpdate = true;

      let li = 0;
      const lp = lGeo.attributes.position.array as Float32Array;
      const lc = lGeo.attributes.color.array as Float32Array;
      const thresh = 7;
      const c1 = new THREE.Color(0x00f0ff);
      const c2 = new THREE.Color(0x6366f1);

      for (let i = 0; i < N && li < maxL; i++) {
        for (let j = i + 1; j < N && li < maxL; j++) {
          const dx = p[i * 3] - p[j * 3],
            dy = p[i * 3 + 1] - p[j * 3 + 1],
            dz = p[i * 3 + 2] - p[j * 3 + 2];
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < thresh * thresh) {
            const ratio = 1 - Math.sqrt(d2) / thresh;
            const c = c1.clone().lerp(c2, ratio);
            lp[li * 6] = p[i * 3];
            lp[li * 6 + 1] = p[i * 3 + 1];
            lp[li * 6 + 2] = p[i * 3 + 2];
            lp[li * 6 + 3] = p[j * 3];
            lp[li * 6 + 4] = p[j * 3 + 1];
            lp[li * 6 + 5] = p[j * 3 + 2];
            lc[li * 6] = c.r;
            lc[li * 6 + 1] = c.g;
            lc[li * 6 + 2] = c.b;
            lc[li * 6 + 3] = c.r;
            lc[li * 6 + 4] = c.g;
            lc[li * 6 + 5] = c.b;
            li++;
          }
        }
      }
      lGeo.setDrawRange(0, li * 2);
      lGeo.attributes.position.needsUpdate = true;
      lGeo.attributes.color.needsUpdate = true;

      camera.position.x += (mx * 4 - camera.position.x) * 0.015;
      camera.position.y += (-my * 3 - camera.position.y) * 0.015;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lGeo.dispose();
      lMat.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="heroCanvas" />;
}
