<template>
    <div class="single-data">
        <h1>{{ data.title }}</h1>
        <article>{{ data.body }}</article>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    data() {
        return {
            id: this.$route.params.id,
            data: {}
        }
    },
    created() {
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(data => {
            console.log(data);
            this.data = data.data;
        });
    }
}
</script>

<style lang="scss" scoped>
    .single-data {
        max-width: 700px;
        margin: 0 auto;
    }
</style>
