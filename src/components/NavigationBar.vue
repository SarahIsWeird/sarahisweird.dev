<template>
    <div id="navigationBar">
        <div id="navigationTitle">
            <router-link class="title-link" to="/" target="_self">Sarah's Portfolio</router-link>
        </div>
        <div id="navigationLinks">
            <span class="link"><a href="/blog" target="_self">Blog</a></span>
            <span class="link"><a href="https://github.com/SarahIsWeird">GitHub</a></span>
            <span class="link"><a href="https://last.fm/user/SarahIsWeird">last.fm</a></span>
            <span class="link">Discord: Sarah.#0069</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar'
};
</script>

<style scoped lang="scss">
#navigationBar {
    position: fixed;
    z-index: 1;

    width: 100vw;
    height: calc(5em - 1px);

    line-height: 5em;

    display: flex;
    justify-content: left;
    gap: 2.5vw;

    border-bottom: 1px solid #303030;
    background-color: inherit;
}

#navigationTitle {
    width: calc(25% - 1em);
    margin-left: 1em;

    font-size: 2vw;
    text-align: center;
}

#navigationLinks {
    display: flex;
    justify-content: left;
    gap: 2.5vw;
}

.title-link {
    text-decoration: none;
}

@media only screen and (max-width: 900px) {
    .link {
        font-size: small;
    }
}

@media only screen and (max-width: 750px) {
    #navigationLinks, .link {
        display: none;
    }

    #navigationTitle {
        width: calc(100% - 1em);
        font-size: x-large;
    }
}
</style>