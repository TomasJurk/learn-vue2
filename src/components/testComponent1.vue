<template>
    <div class="container">
        <slot name="title"></slot>
        <h1>H1</h1>
        <slot name="text"></slot>
    </div>
</template>

<script>
export default {
    name: 'testComponent1'
}
</script>

<style lang="scss">
    .container {
        margin: 50px;
    }
</style>
