<template>
    <div id="aboutMe">
        <div class="title">
            <NameTyper />
        </div>
        <p>
            I'm a 19 year old software developer from the German state Brandenburg.
            I'm a student at the
            <a href="https://hwr-berlin.de" target="_blank">Berlin School of Economics and Law</a>.
            I'm in a dual study program, so for about 50% of my semester I work at
            <a href="https://data-experts.de" target="_blank">data experts gmbh</a>.
        </p>
        <p>
            In order of preference, I'm proficient in Kotlin, C/C++, Java and HTML/CSS/JS.
            I also have a bit of experience with Assembly and Swift.
        </p>
    </div>
</template>

<script>
import NameTyper from '@/components/NameTyper';

export default {
    name: 'AboutMe',
    components: { NameTyper },
};
</script>

<style scoped lang="scss">
#aboutMe {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    text-align: left;

    p {
        width: 90%;
        margin: 1em 0;

        line-height: 1.5em;
    }
}

.title {
    margin: 2em 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>