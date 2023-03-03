import { createApp } from 'vue'
import { createStore} from "vuex";
import App from './App.vue'
import TheHome from './components/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import './index.css'


const store = createStore({
    state() {
        return {
            isConnected: false,
        }
    }
})


const app = createApp(App);

app.component('the-home', TheHome)
app.component('the-header', TheHeader)

app.use(store)
app.mount('#app')
