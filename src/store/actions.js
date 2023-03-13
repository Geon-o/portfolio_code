import {
    VIEWS_COUNT_UP
} from './mutation-types'

export default{
    async viewCountUp({ commit }, payload){
        const value = payload
        if (value){
            commit(VIEWS_COUNT_UP, 1)
        }
    }
}