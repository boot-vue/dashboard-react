import {fromJS} from 'immutable';

const defaultState = fromJS({
    isCollapsed: false//是否是收起状态
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case "collapse":
            return state.set("isCollapsed", action.value)
        default:
            return state;
    }
}
