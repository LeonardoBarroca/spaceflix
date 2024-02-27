<template>
    <div class="galaxy-area">
        <img :src="imagePath" :alt="name">
    </div>
    <div class="galaxy-data-area">
        <p><strong>Nome</strong>: {{ name }} - {{ englishName }} </p>
        <p><strong>Tipo</strong>: {{ type }} </p>
        <p><strong>Distância da Terra</strong>: {{ distanceFromEarth }}</p>
        <p><strong>Diâmetro</strong>: {{ diameter }}</p>
        <p><strong>Número de estrelas</strong>: {{ numberOfStars }}</p>
        <p><strong>Descoberto em</strong>: {{ discoveryDate }}</p>
        <p><strong>Descoberto por</strong>: {{ discoveryBy }}</p>
        <p><strong>Fato interessante</strong>: {{ interestingFact }}</p>
        <p><strong>Curiosidade</strong>: {{ curiosity }}</p>
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        imagePath: String,
        name: String,
        englishName: String,
        type: String,
        distanceFromEarth: String,
        diameter: String,
        numberOfStars: String,
        discoveryYear: String,
        discoveredBy: String,
        interestingFact: String,
        curiosity: String
    },
}
</script>

<style scoped>
.galaxy-area {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: black;
}

.galaxy-data-area {
    background-color: black;
    color: white;
    padding: 16px;
}

.galaxy-data-area p {
    display: flex;
    justify-content: center;
}

img {
    height: 300px;
    object-fit: cover;
}

</style>