<template>
    <div v-if="prefersReducedMotion" class="spin-container">
        Loading...
    </div>
    <div v-else class="spin-container">
        <span class="spin"></span>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner',
    data() {
        return {
            reducedMotionQuery: window.matchMedia('(prefers-reduced-motion: reduce)'),
            prefersReducedMotion: false,
        }
    },
    mounted() {
        this.reducedMotionQuery.addEventListener('change', () => {
            this.prefersReducedMotion = this.reducedMotionQuery.matches;
        });
    },
}
</script>

<style scoped>
.spin-container {
    width: 100%;

    padding-top: 3em;

    display: flex;
    justify-content: center;
}

.spin {
    display: inline-block;
    width: 4em;
    height: 4em;

    border: 5px solid white;
    border-top: 5px solid #000000ff;
    border-radius: 50%;

    animation: rotation 1s cubic-bezier(.5,.75,.5,.25) infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>