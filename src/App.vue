<template>
  <div id="app">
    <Header></Header>
    <div class="container">
        <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Main/Header'
import Footer from '@/components/Main/Footer'


export default {
  name: 'app',
  components: {
    Header, 
    Footer
  }
}
</script>

<style>
</style>
