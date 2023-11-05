<template>
    <footer class="footer">
        <div class="social-icons">
            <a href="https://www.instagram.com/seu_instagram" target="_blank" rel="noopener noreferrer">
                <IconGithub />
            </a>
            <a href="https://github.com/seu_usuario_github" target="_blank" rel="noopener noreferrer">
                <IconInstagram />
            </a>
        </div>
    </footer>
</template>

<script>
import IconGithub from "@/components/icons/IconGithub.vue"
import IconInstagram from "@/components/icons/IconInstagram.vue"

export default {
    name: 'Footer',
    components: { IconGithub, IconInstagram }
};
</script>

<style scoped>
.footer {
    text-align: center;
    padding: 20px;
    background-color: rgb(20, 20, 20);
}

.social-icons a {
    width: 30px;
    margin: 0 10px;
}
</style>
