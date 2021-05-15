import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'

const app = createApp(App)
app.directive('tooltip', VTooltip)
app.directive('close-popover', VClosePopover)
app.component('v-popover', VPopover)
app.directive
app.mount('#app')