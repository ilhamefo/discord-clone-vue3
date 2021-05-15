const state = {
    showModal: false
}

const mutations = {
    toggleModal(state) {
        state.showModal = !state.showModal
    }
}

export default {
    namespaced: true,
    state,
    mutations
}