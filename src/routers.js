import HomeVue from "./components/HomeVue.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue"
import Add from "./components/resturant/Add.vue"
import Update from "./components/resturant/Update.vue"

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
    {
        name: "Add",
        component: Add,
        path: '/add-resturant'
    },
    {
        name: "Update",
        component: Update,
        path: '/update-resturant'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;