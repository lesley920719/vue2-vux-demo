const SESSION = sessionStorage.getItem('activity') && JSON.parse(sessionStorage.getItem('activity')) || {};
const state = {
    activityInfo: SESSION.activityInfo || {}, // 用户信息
}
const getters = {
    // handleChannel(state) {
    //     return state.commonData.environment == '0' ? '1' : state.commonData.environment
    // }
}
const mutations = { // mutation 必须是同步函数
    setActivityInfo(state, data) {
        state.activityInfo = {
            ...data
        }
    },
}
const actions = {
  setActivityInfo({ commit }, data) {
        commit('setActivityInfo', data)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}