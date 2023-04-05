<template>
    <div id="content">
        <aside>
            <div class="photo">
                <img src="/me%201.jpg" loading="lazy" alt="A selfie of me.">
            </div>
            <div class="links">
                <div class="link"><router-link to="/blog">Blog</router-link></div>
                <div class="link"><a href="https://github.com/SarahIsWeird">GitHub</a></div>
                <div class="link"><a href="https://last.fm/user/SarahIsWeird">last.fm</a></div>
                <div class="link">
                    Discord:<br />
                    Sarah.<wbr>#0069
                </div>
            </div>
        </aside>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {
    name: 'PageContent',
};
</script>

<style scoped lang="scss">
#content {
    width: 100vw;
    min-height: calc(100vh - 7em);
    min-height: -webkit-fill-available;

    padding-top: 7em;

    display: flex;

    overflow-x: hidden;
    overflow-y: scroll;
}

aside {
    width: calc(25% - 2em);
    padding: 1em;

    display: flex;
    flex-direction: column;

    word-break: break-word;

    .links {
        margin-top: 2em;

        display: flex;
        flex-direction: column;
        gap: 1em;

        font-size: 3.25vw;
    }
}

main {
    width: calc(75% - 2em);
    padding: 1em;

    display: flex;
    flex-direction: column;
}

.photo {
    width: 100%;

    img {
        width: 80%;
        border-radius: 100%;
    }
}

@media only screen and (min-width: 751px) {
    .links, .link {
        display: none;
    }
}

@media only screen and(max-width: 750px) {
    main {
        font-size: 3.25vw;
    }
}
</style>