<template>
    <div class="teste">
        <Renderer ref="renderer" width="500px" height="500px"
            :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 1 }">
            <Camera :position="{ z: 6.5 }" />
            <Scene background="#000000">
                <AmbientLight :intensity="0.5" />
                <PointLight :position="{ x: 100, z: 0 }" />
                <PointLight color="#ffffff" :intensity="0.5" :position="{ y: 0, z: 0 }" />
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
    </div>
</template>

<script>
import { AmbientLight, Camera, Renderer, PointLight, Scene, Sphere, StandardMaterial, Texture } from 'troisjs';

export default {
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
.teste{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: black;
}
</style>