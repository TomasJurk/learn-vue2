<template>
    <div v-theme:column="'narrow'" v-autoMargin class="show">
        <h2>All data</h2>
        <input type="text" v-model="search" placeholder="search"/>
        <div v-for="(dat, index) in filteredData" :key="index">
            <router-link :to="'/data/' + dat.id">
                <h3 v-rainbow>{{ dat.title | to-uppercase }}</h3>
            </router-link>
            <p>{{ dat.body | snippet }}</p>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import searchMixin from '../mixins/searchMixin';

export default {
    name: 'AppShowData',
    data() {
        return {
           data: [],
           search: ''
        }
    },
    created() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            this.data = data.data.slice(0, 10);
        });
    },
    computed: {
        
    },
    filters: {
        // can use to-uppercase and toUppercase, this is same 
        toUppercase (value) {
            return value.toUpperCase();
        }
    },
    directives: {
        rainbow: {
            bind(el, binding, vnode) {
                el.style.cssText = (`color: #${Math.random().toString().slice(2, 8)}`);
            }
        },
        autoMargin: {
            bind(el, binding, cnode) {
                el.style.margin = '0 auto';
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style lang="scss" scoped>

</style>
