import HomeVue from "./components/HomeVue.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: "HomeVue",
        component: HomeVue,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: "Login",
        component: Login,
        path: '/login'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;