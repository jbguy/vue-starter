<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <router-link to="/"><img src="../../assets/logo.png" width="30" height="30" alt=""></router-link>
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in navItems" v-bind:key="item.name">
                            <router-link :to="{ path: item.routerLink }" class="nav-link">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            navItems: []
            // My items in the navbar
            // navItems: [{
            //     name: 'Generator', 
            //     routerLink: '/generator'
            // }, {
            //     name: 'OMG', 
            //     routerLink: '/omg'
            // }]
        }
    }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        padding-bottom: 20px;
    }
</style>
