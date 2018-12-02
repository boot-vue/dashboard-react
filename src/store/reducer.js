import {combineReducers} from 'redux-immutable';
import {reducer as loginReducer} from '../page/login/store';
import {reducer as navReducer} from '../component/nav/store';
import {reducer as headReducer} from '../component/head/store';

/*组合reducer*/
const reducer = combineReducers({
    login: loginReducer,
    nav: navReducer,
    head: headReducer
});

export default reducer;