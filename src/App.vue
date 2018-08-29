<template>
  <div id="app">
    <AppNavbar />
    <h1>First app</h1>
    <!-- <AppForm/> -->
    <AppShowData />
  </div>
</template>

<script>

import TestComponent1 from './components/testComponent1.vue'
import AppNavbar from './components/AppNavbar'
import AppForm from './components/AppForm'
import AppShowData from './components/AppShowData'

export default {
  name: 'app',
  components: {
    TestComponent1,
    AppNavbar,
    AppForm,
    AppShowData
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .spacer {
    flex: 1 1 auto;
  }
  .full-width {
    width: 100%;
  }

  h1, h2 {
    width: fit-content;
    margin: 0 auto;
  }
</style>
