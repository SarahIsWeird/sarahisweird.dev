<template>
    <MdxRenderer>
        <Blogs />
    </MdxRenderer>
</template>

<script>
import MdxRenderer from "@/components/MdxRenderer.vue";
import Blogs from '@/pages/text/Blogs.mdx';

export default {
    name: "BlogsPage",
    components: { MdxRenderer, Blogs },
}
</script>

<style scoped>

</style>