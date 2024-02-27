<template>
    <div class="planet-area">
        <Renderer ref="renderer" width="500px" height="500px"
            :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 1 }">
            <Camera :position="{ z: 6.5 }" />
            <Scene background="#000000">
                <AmbientLight :intensity="0.5" />
                <PointLight :position="{ x: 100, z: 0 }" />
                <PointLight color="#ffffff" :intensity="0.5" :position="{ y: 0, z: 0 }" />
                <Sphere ref="mesh" :radius="2.5" :width-segments="100" :height-segments="100">
                    <StandardMaterial :props="{ displacementScale: 0.05 }">
                        <Texture :src=pathBaseColor />
                        <Texture :src=pathDisplacement name="displacementMap" />
                        <Texture :src=pathNormal name="normalMap" />
                        <Texture :src=pathRoughness name="roughnessMap" />
                    </StandardMaterial>
                </Sphere>
            </Scene>
        </Renderer>
    </div>
    <div class="planet-data-area">
        <p><strong>Nome</strong>: {{ name }} ({{ englishName }}) </p>
        <p><strong>Diâmetro</strong>: {{ diameter }} </p>
        <p><strong>Gravidade</strong>: {{ gravity }}</p>
        <p><strong>Massa</strong>: {{ mass }}</p>
        <p><strong>Número de Luas</strong>: {{ numberOfMoons }}</p>
        <p><strong>Inclinação do eixo</strong>: {{ axialTilt }}</p>
        <p><strong>Temperatura da superfície</strong>: {{ surfaceTemperature }}</p>
        <p><strong>Comprimento do dia</strong>: {{ dayLength }}</p>
        <p><strong>Comprimento do ano</strong>: {{ yearLength }}</p>
        <p><strong>Descoberto em</strong>: {{ discoveryDate }}</p>
        <p><strong>Descoberto por</strong>: {{ discoveryBy }}</p>
        <p><strong>Composição da atmosfera</strong>: {{ atmosphericComposition }}</p>
        <p><strong>Curiosidade</strong>: {{ curiosity }}</p>
    </div>
</template>

<script>
import { AmbientLight, Camera, Renderer, PointLight, Scene, Sphere, StandardMaterial, Texture } from 'troisjs';

export default {
    components: { AmbientLight, Camera, Renderer, PointLight, Scene, Sphere, StandardMaterial, Texture },
    props: {
        name: String,
        englishName: String,
        pathBaseColor: String,
        pathDisplacement: String,
        pathRoughness: String,
        pathNormal: String,
        diameter: String,
        gravity: String,
        distanceFromSun: String,
        mass: String,
        atmosphericComposition: String,
        numberOfMoons: String,
        axialTilt: String,
        surfaceTemperature: String,
        dayLength: String,
        yearLength: String,
        discoveryDate: String,
        discoveryBy: String,
        curiosity: String
    },
}
</script>

<style scoped>
.planet-area {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: black;
}

.planet-data-area {
    background-color: black;
    color: white;
    padding: 16px;
}

.planet-data-area p {
    display: flex;
    justify-content: center;
}
</style>