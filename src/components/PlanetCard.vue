<template>
    <div class="card">
        <Renderer class="planet" ref="renderer" height="600px"
            :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
            <Camera :position="{ z: 6.5 }" />
            <Scene background="#000000">
                <AmbientLight :intensity="0.5" />
                <PointLight :position="{ x: 100, z: 0 }" />
                <PointLight color="#ffffff" :intensity="0.75" :position="{ y: 0, z: 0 }" />
                <Sphere ref="mesh" :radius="2.5" :width-segments="100" :height-segments="100">
                    <StandardMaterial :props="{ displacementScale: 0.1 }">
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
            <p>{{ planetNameEnglish }}</p>
        </div>
    </div>

</template>

<script>
import { AmbientLight, Camera, Renderer, PointLight, Scene, Sphere, StandardMaterial, Texture } from 'troisjs';
//

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
    data() {
        return {

        }
    }
}
</script>

<style >
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.1s;
    width: 120px;
    height: 310px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
}

.container {
    padding: 2px 16px;
}

.planet {
    border-start-start-radius: 0.375rem;
    border-start-end-radius: 0.375rem;
}

.centralize {
    display: flex;
    align-items: center;
}
</style>