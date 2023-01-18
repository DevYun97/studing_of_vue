import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Coms from './components/StatusComs.vue'
import Teststt from './AppStatus.vue'

const app = createApp(App)


app.use(store).use(router).mount('#app')
// Vue.component('MyComs', Coms)
app.component('MyComs', Teststt)
// createApp(App).use(store).use(router).mount('#app')
