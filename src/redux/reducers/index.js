/**
 * Created by zll on 2017/10/11.
 */
import { combineReducers } from 'redux';
import MsgTip from './msgTip'; //页面提示语
import Login from './login'; //登录页面

export default combineReducers({
    MsgTip,
    Login,
})