<template>
    <div class="show">
        <h2>All data</h2>
        <div v-for="(dat, index) in data" :key="index">
            <h3 v-rainbow>{{ dat.title }}</h3>
            <p>{{ dat.body }}</p>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'AppShowData',
    data() {
        return {
           data: []
        }
    },
    created() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            this.data = data.data.slice(0, 10);
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
