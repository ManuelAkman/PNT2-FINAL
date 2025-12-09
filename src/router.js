import { createRouter, createWebHistory } from "vue-router"
import Conversor from "./components/Conversor.vue"
import Respuestas from "./components/Respuestas.vue"

const routes = [

    { path: '/', redirect: '/conversor' },

   
    { path: '/conversor', component: Conversor },
    { path: '/respuestas', component: Respuestas },


    { path: '/:pathMatch(.*)*', redirect: '/conversor' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router