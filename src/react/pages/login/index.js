/**
 * Created by zll on 2017/10/11.
 */
import React from 'react';
import { connect } from 'react-redux';
import { message} from 'antd';
import * as act from '../../../redux/actions/login'
import styles from './login.css';
 import LoginForm from '../../components/loginForm/loginForm';

class Login extends React.Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.msgTip!==this.props.msgTip){
            //debugger;
            message.error(nextProps.msgTip);
         }
    }
    render(){
        return (
            <div className={styles.login}>

                <LoginForm {...this.props} />
                <div className={styles.footer}>
                    <div className={styles.footerTitle}>
                        <div className={styles.footerFont}>
                            支持谷歌浏览器 版权所有 @安徽蓝盾光电子股份有限公司
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Login.propTypes = {
//     submitClick: React.PropTypes.func.isRequired
// };


function mapStateToProps(state) {
    return {
        loginRet: state.Login.loginRet,
        userInfo: state.Login.userInfo,
        msgTip:state.MsgTip.msg,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitClick: (param) => {
            dispatch(act.loginSubmit(param))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);