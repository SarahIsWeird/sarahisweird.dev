<template>
    <NavigationBar />
    <PageContent>
        <router-view></router-view>
    </PageContent>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import PageContent from "@/components/PageContent.vue";

export default {
    name: 'App',
    components: { PageContent, NavigationBar },
}
</script>

<style>
html, #app {
    min-height: 100vh;
    min-height: -webkit-fill-available;

    color: white;
    background-color: black;
}

#app {
    font-family: 'Fira Code VF', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    font-size: medium;
}

* {
    margin: 0;
    padding: 0;
}

a, a:visited {
    color: white;
}
</style>
