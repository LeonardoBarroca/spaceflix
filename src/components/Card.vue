<template>
    <div class="card">

        <div class="container">
            <h5><b>{{ name }}</b></h5>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        image: String,
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

<style >
.card {
    width: 130px;
    height: 240px;
}

.card:hover {
    transform: scale(1.01);
}

.container {
    padding: 2px 16px;
    border-start-start-radius: 0.375rem;
    border-start-end-radius: 0.375rem;
}
</style>