// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from './runtime-canvas'
import { getRootContainer } from './game'
import App from './App.vue'

// 根组件
// 需要根容器
createApp(App).mount(getRootContainer())

window.console.warn = () => {};