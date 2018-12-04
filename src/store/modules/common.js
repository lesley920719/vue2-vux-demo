const SESSION = sessionStorage.getItem('common') && JSON.parse(sessionStorage.getItem('common')) || {};
const state = {
    userInfo: SESSION.userInfo || {}, // 用户信息
}
const getters = {
    // handleChannel(state) {
    //     return state.commonData.environment == '0' ? '1' : state.commonData.environment
    // }
}
const mutations = { // mutation 必须是同步函数
    setUserInfo(state, data) {
        state.userInfo = {
            ...data
        }
    },
}
const actions = {
    setUserInfo({ commit }, data) {
        commit('setUserInfo', data)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}