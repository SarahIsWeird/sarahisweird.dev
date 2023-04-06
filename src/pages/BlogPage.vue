<template>
    <MdxRenderer class="blog-entry">
        <a href="/blog" target="_self">&lt; Back to all blogs</a>
        <component :is="currentBlogPage" />
    </MdxRenderer>
</template>

<script>
import MdxRenderer from "@/components/MdxRenderer.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import {defineAsyncComponent, markRaw} from "vue";

export default {
    name: "BlogPage",
    props: {
        id: String,
    },
    components: {
        LoadingSpinner,
        MdxRenderer,
    },
    data() {
        return {
            currentBlogPage: 'component'
        };
    },
    mounted() {
        const component = defineAsyncComponent({
            loader: () => import(`@/pages/text/blog/${this.id}.mdx`),
            loadingComponent: LoadingSpinner,
            onError: () => {
                this.$router.push('/blog');
            },
        });

        this.currentBlogPage = markRaw(component);
    },
}
</script>

<style scoped>
.blog-entry {
    font-size: 0.9rem;
}
</style>