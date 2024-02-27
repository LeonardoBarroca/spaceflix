<template>
    <div class="card">
        <img :src="imagePath" :alt="name">
        <div class="container">
            <h6><b>{{ name }}</b></h6>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        imagePath: String,
        name: String
    },
}
</script>

<style scoped>
.card {
    width: 200px;
    height: 200px;
    background-color: black;
    color: white;
}

.card:hover {
    transform: scale(1.01);
}

img {
    height: 80%;
    object-fit: cover;
}

.container {
    height: 20px;
    padding: 4px 8px;
}
</style>