import {
    VIEWS_COUNT_UP
} from './mutation-types'

export default {
    [VIEWS_COUNT_UP](state, passingData){
        state.views += passingData
    }
}