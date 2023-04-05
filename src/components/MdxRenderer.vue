<template>
    <div id="page">
        <div class="content">
            <slot></slot>
            <div class="spacer"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MdxRenderer",
    props: {
        dontWrapTitle: Boolean,
    },
}
</script>

<style lang="scss">
#page {
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

        table {
            max-width: 100%;

            td {
                object-fit: cover;
            }
        }
    }
}

.title {
    margin-top: 2em;
    margin-bottom: 0;

    line-height: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.spacer {
    height: 2em;
}

.content code {
    margin-top: 1em;
    border-radius: 1em;
}

.two-images {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        width: 49%;

        display: flex;
        flex-direction: column;
    }
}

.anchor-span {
    position: relative;
    top: calc(-5em + 1px);
}
</style>