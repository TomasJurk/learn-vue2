<template>
    <div>
        <form v-if="!submited">
            <h2>Form</h2>
            <input v-model="blog.name" type="text" placeholder="name">
            <input v-model="blog.text" type="text" placeholder="text">
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author">{{ author }}</option>
            </select>
            <div class="checkboxes">
                <label>Protein</label>
                <input type="checkbox" value="protein" v-model="blog.categories">
                <label>Carbs</label>
                <input type="checkbox" value="carbs" v-model="blog.categories">
                <label>Fat</label>
                <input type="checkbox" value="fat" v-model="blog.categories">
            </div>
            <button @click.prevent="submitForm">Submit</button>
        </form>
        <div v-if="submited">
            <h2>Thanks for adding your post</h2>
        </div>
        <div class="preview">
            <h3>preview</h3>
            <p>Name: {{ blog.name }}</p>
            <p>text: {{ blog.text }}</p>
            <p>Author: {{ blog.author }}</p>
            <p>Categories:</p>
            <ul>
                <li v-for="category in blog.categories" :key="category">{{ category }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'AppForm',
    data () {
        return {
            blog: {
                name: '',
                text: '',
                author: '',
                categories: []
            },
            authors: ['name 1', 'name 2', 'name 3'],
            submited: false
        }
    },
    methods: {
        /* submitForm () {
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.name,
                body: this.blog.text,
                userId: 1
            }).then(data => {
                console.log(data);
                this.submited = true;
            });
        } */
        submitForm () {
            Axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.name,
                body: this.blog.text,
                userId: 1
            }).then(data => {
                console.log(data);
                this.submited = true;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .preview, form {
        width: 300px;
        margin: 50px auto;
        display: flex;
        flex-direction: column;
    }
    .checkboxes {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
</style>
