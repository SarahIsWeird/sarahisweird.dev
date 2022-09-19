<template>
    <div id="aboutMe">
        <div class="title">
            <NameTyper />
        </div>
        <div class="content">
            <div class="mdOutput" v-html="mdOutput"></div>
            <div class="spacer"></div>
        </div>
    </div>
</template>

<script>
import NameTyper from '@/components/NameTyper';
import aboutMeMd from '@/pages/AboutMe.md';
import { marked } from 'marked';

export default {
    name: 'AboutMe',
    components: { NameTyper },
    data() {
        return {
            mdOutput: marked(aboutMeMd),
        };
    },
};
</script>

<style lang="scss">
#aboutMe {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    text-align: left;

    .content {
        width: 90%;
        margin: 1em 0;

        line-height: 1.5em;
    }
}

.mdOutput {
    > * {
        margin-top: 1em;
    }

    ul {
        margin-left: 2em;
    }

    h1 {
        line-height: 2.5rem;
    }
}

.title {
    margin-top: 2em;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.spacer {
    height: 2em;
}
</style>