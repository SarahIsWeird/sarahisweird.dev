<template>
    <NavigationBar />
    <PageContent />
</template>

<script>
import PageContent from '@/components/PageContent';
import NavigationBar from '@/components/NavigationBar';

export default {
    name: 'App',
    components: { NavigationBar, PageContent },
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
