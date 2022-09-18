<template>
    <div id="nameTyper">
        <span>Hi! My name is </span><br />
        <span><b>{{ dynamicName }}</b></span>
        <span v-if="doneTyping">.</span>
        <span class="cursor">_</span>
    </div>
</template>

<script>
const names = ['Sarah Klocke', '@SarahIsWeird', 'Sawarawah', 'Sarah.#0069'];
const typeDelay = 100;
const showDelay = 4000;

export default {
    name: 'NameTyper',
    data() {
        return {
            dynamicName: '',
            currentName: 0,
            currentLetter: 0,
            isDeleting: false,
            doneTyping: false,
        };
    },
    methods: {
        addLetter() {
            this.dynamicName += names[this.currentName][this.currentLetter++];
            this.scheduleNextLetter();
        },
        removeLetter() {
            this.dynamicName = this.dynamicName.substring(0, this.currentLetter--);
            this.scheduleNextLetter();
        },
        doneAdding() {
            this.schedulePeriod();

            this.isDeleting = true;
            setTimeout(this.removeLetter, showDelay);
        },
        doneDeleting() {
            this.currentLetter = 0;
            this.isDeleting = false;
            this.selectNextName();

            setTimeout(this.addLetter, typeDelay);
        },
        schedulePeriod() {
            setTimeout(() => {
                this.doneTyping = true;

                setTimeout(() => {
                    this.doneTyping = false;
                }, showDelay - typeDelay);
            }, typeDelay);
        },
        scheduleNextLetter() {
            if (this.isDeleting) {
                if (this.currentLetter >= 0) {
                    setTimeout(this.removeLetter, typeDelay);
                    return;
                }

                this.doneDeleting();
                return;
            }

            if (this.currentLetter < names[this.currentName].length) {
                setTimeout(this.addLetter, typeDelay);
                return;
            }

            this.doneAdding();
        },
        selectNextName() {
            this.currentName++;
            this.currentName %= names.length;
        }
    },
    mounted() {
        setTimeout(this.addLetter, 1000);
    }
};
</script>

<style scoped>
#nameTyper {
    font-size: min(2em, 6vw);
}

@keyframes blink {
    50% {
        opacity: 0.0;
    }
}

.cursor {
    animation: blink 0.75s step-start 0s infinite;
}

@media only screen and (min-width: 900px) {
    br {
        display: none;
    }
}
</style>