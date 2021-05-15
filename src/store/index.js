import { createStore, createLogger } from 'vuex'
import test from './modules/test'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        test
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})