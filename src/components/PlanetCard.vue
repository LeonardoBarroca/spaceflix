<template>
    <div class="card">
        <Renderer class="planet" ref="renderer" height="600px"
            :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 1 }">
            <Camera :position="{ z: 6.5 }" />
            <Scene background="#000000">
                <AmbientLight :intensity="0.5" />
                <PointLight :position="{ x: 100, z: 0 }" />
                <PointLight color="#ffffff" :intensity="0.75" :position="{ y: 0, z: 0 }" />
                <Sphere ref="mesh" :radius="2.5" :width-segments="100" :height-segments="100">
                    <StandardMaterial :props="{ displacementScale: 0.05 }">
                        <Texture :src=planetPathBaseColor />
                        <Texture :src=planetPathDisplacement name="displacementMap" />
                        <Texture :src=planetPathNormal name="normalMap" />
                        <Texture :src=planetPathRoughness name="roughnessMap" />
                    </StandardMaterial>
                </Sphere>
            </Scene>
        </Renderer>
        <div class="container">
            <h5><b>{{ planetName }}</b></h5>
        </div>
    </div>
</template>

<script>
import { AmbientLight, Camera, Renderer, PointLight, Scene, Sphere, StandardMaterial, Texture } from 'troisjs';

export default {
    name: "PlanetCard",
    components: { AmbientLight, Camera, Renderer, PointLight, Scene, Sphere, StandardMaterial, Texture },
    props: {
        planetName: String,
        planetNameEnglish: String,
        planetPathBaseColor: String,
        planetPathDisplacement: String,
        planetPathRoughness: String,
        planetPathNormal: String
    },
}
</script>

<style >
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border:none;
    width: 120px;
    height: 285px;
    background-color: black;
    color: white;

}

.card:hover {
    transform: scale(1.01);
}

.container {
    padding: 4px 8px;

}

.planet {
    border-start-start-radius: 0.3rem;
    border-start-end-radius: 0.3rem;
}

.centralize {
    display: flex;
    align-items: center;
}
</style>