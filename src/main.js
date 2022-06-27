import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './routers'

createApp(App)
.use(router)
.mount('#app')



// import { createApp } from 'vue'
// import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

// // createApp(App).mount('#app')
// const app = createApp({})

// app.component('app', App)


// app.mount('#app')

