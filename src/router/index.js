import VueRouter from 'vue-router'

// Components
import Home from '@/components/Main/Home'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
  ]
})
