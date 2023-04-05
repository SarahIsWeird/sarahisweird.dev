<template>
    <MdxRenderer dont-wrap-title>
        <AboutMeMdx />
    </MdxRenderer>
</template>

<script>
import MdxRenderer from "@/components/MdxRenderer.vue";
import AboutMeMdx from './text/AboutMe.mdx';

export default {
    name: "LandingPage",
    components: { MdxRenderer, AboutMeMdx },
}
</script>

<style scoped>

</style>