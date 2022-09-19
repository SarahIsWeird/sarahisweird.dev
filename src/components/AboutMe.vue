<template>
    <div id="aboutMe">
        <div class="title">
            <NameTyper />
        </div>
        <div class="content">
            <p>
                Welcome to my portfolio!
                I'm a 19 year old software developer from the German state Brandenburg, who's studying at the
                <a href="https://hwr-berlin.de" target="_blank">Berlin School of Economics and Law</a>.
                I'm in a dual study program, so for about 50% of my semester I work at
                <a href="https://data-experts.de" target="_blank">data experts gmbh</a>.
            </p>
            <p>
                In order of preference, I'm proficient in Kotlin, C/C++, Java and to some extent HTML/CSS/JS.
                I also have a bit of experience with Assembly and Swift.
            </p>
            <p>
                I'm currently listening to
                <a href="https://www.youtube.com/watch?v=Gbz2C2gQREI" target="_blank">Vaundy</a>,
                <a href="https://www.youtube.com/watch?v=LZymtEQJQfM" target="_blank">the band apart</a>,
                <a href="https://www.youtube.com/watch?v=W4TOXpA7ktI" target="_blank">羊文学</a>,
                <a href="https://www.youtube.com/watch?v=L-Bzhpm8h0o" target="_blank">King Gnu</a>,
                <a href="https://www.youtube.com/watch?v=0XWzY5SLTss" target="_blank">loqto</a>,
                <a href="https://www.youtube.com/watch?v=j_ZmBl2OV14" target="_blank">LITE</a> and
                <a href="https://www.youtube.com/watch?v=F5EFsUU7RRA" target="_blank">Ryo Fukui</a>.
                (Click for good songs!)
            </p>
            <h1>Technologies I've worked with</h1>
            <p>
                These aren't exhaustive by a long shot! Click on the names to visit the GitHub repository
                of <i>something</i> I've created with that technology.
            </p>
            <h2>Kotlin</h2>
            <ul>
                <li><a href="https://github.com/GenPare/genpare-backend" target="_blank">Ktor</a></li>
                <li><a href="https://github.com/GenPare/genpare-backend" target="_blank">Exposed</a></li>
                <li><a href="https://github.com/SarahIsWeird/DBCreate" target="_blank">Compose Multiplatform</a></li>
            </ul>
            <h2>C/C++</h2>
            <ul>
                <li>Some <a href="https://github.com/SarahIsWeird/WeirdOS" target="_blank">OS development</a></li>
                <li>Mostly <a href="https://github.com/SarahIsWeird/imgfilter" target="_blank">toying around</a></li>
            </ul>
            <h2>Java</h2>
            <ul>
                <li>Spring Boot</li>
                <ul>
                    <li>work only</li>
                </ul>
            </ul>
            <h2>HTML/<wbr>CSS/<wbr>JavaScript</h2>
            <ul>
                <li><a href="https://github.com/SarahIsWeird/rubiksinfo/tree/main/frontend" target="_blank">React</a></li>
                <ul>
                    <li>
                        finished website about the Rubik's Cube
                        <a href="https://rubiksinfo.de/" target="_blank">here</a>
                        (in German)
                    </li>
                </ul>
                <li>Express</li>
                <ul>
                    <li>I've written a backend for a screenshot host, but it's closed source.</li>
                </ul>
            </ul>
            <h2>Python</h2>
            <p>
                I despise python. I had to work with it because of a university project, in which we're
                trying to teach a humanoid robot to play concentration. If you want to read about it,
                you can read the (German) paper <a href="NAO-Memory.pdf" target="_blank">here</a>.
                Note: I've mostly worked on the image recognition itself.
            </p>
            <ul>
                <li><a href="https://github.com/NAO-Bilderkennung/memory-detector" target="_blank">OpenCV</a></li>
                <li><a href="https://github.com/NAO-Bilderkennung/memory-detector" target="_blank">YOLO</a></li>
            </ul>
            <p>
                Congratulations for reading this far! Have a cookie: 🍪
            </p>
            <div class="spacer"></div>
        </div>
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

    .content {
        width: 90%;
        margin: 1em 0;

        line-height: 1.5em;

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