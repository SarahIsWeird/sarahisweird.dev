<template>
    <MdxRenderer class="blog-entry">
        <a href="/blog" target="_self">&lt; Back to all blogs</a>
        <component :is="currentBlogPage"></component>
    </MdxRenderer>
</template>

<script>
import MdxRenderer from "@/components/MdxRenderer.vue";
import {defineAsyncComponent, markRaw} from "vue";

const blogPages = {
    'reduce-filter': defineAsyncComponent(() => import('@/pages/text/blog/reduce-filter.mdx')),
};

export default {
    name: "BlogPage",
    components: {
        MdxRenderer
    },
    props: {
        id: String,
    },
    data() {
        return {
            currentBlogPage: 'component',
        };
    },
    mounted() {
            const id = this.$route.params.id;

            if (blogPages[id] !== undefined) {
                this.currentBlogPage = markRaw(blogPages[id]);
                return;
            }

            this.$router.push('/blog');
    }
}
</script>

<style scoped>
.blog-entry {
    font-size: 0.9rem;
}
</style>