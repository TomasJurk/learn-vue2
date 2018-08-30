<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>Home</router-link>
            </li>
            <li>
                <router-link to="/add" exact>Add new</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar'
}
</script>

<style lang="scss">
    nav {
        width: 100%;
        height: 64px;
        display: flex;
        ul {
            width: fit-content;
            margin: 0 auto;
        }
        li {
            margin: 20px;
            display: inline-block;
            text-decoration: none;
        }
    }
    .router-link-active {
        background-color: grey;
        border-radius: 5px;
    }
</style>

