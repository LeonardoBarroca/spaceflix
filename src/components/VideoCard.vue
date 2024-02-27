<template>
    <div @mouseover="playVideo" @mouseleave="pauseVideo">
        <div :id="playerId"></div>
    </div>
</template>

<script>
export default {
    props: {
        videoId: {
            type: String,
            required: true,
        },
        playerId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            player: null,
        };
    },
    mounted() {
        this.createPlayer();
    },
    methods: {
        createPlayer() {
            this.player = new YT.Player(this.playerId, {
                height: '200',
                width: '200',
                videoId: this.videoId,
                events: {
                    onReady: (event) => {
                        this.player = event.target;
                    },
                },
            });
        },
        playVideo() {
            if (this.player) {
                this.player.playVideo();
            }
        },
        pauseVideo() {
            if (this.player) {
                this.player.pauseVideo();
            }
        },
    },
};
</script>
