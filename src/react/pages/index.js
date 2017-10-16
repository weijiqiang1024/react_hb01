/**
 * Created by zll on 2017/10/12.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon,Layout,message} from 'antd';

import logo from '../../public/images/mainLogo.png' ;
import * as act from '../../redux/actions/login';
import {MainMenu} from '../../utils/menu';
import {SideRoute,ContentRoute} from '../routes'
const { Header} = Layout;

message.config({
    top: 50,
    duration: 1,
});
export  class mainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            id:''
        };
        this.logOut=this.logOut.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.msgTip!==this.props.msgTip){
           if(nextProps.msgTip.type===0)
            message.success(nextProps.msgTip.msg);
            else if(nextProps.msgTip.type===1)
               message.error(nextProps.msgTip.msg);
        }
    }
    componentWillUpdate() {

    }

    componentDidMount() {

    }

    render() {

        if(this.props.userInfo){
            this.state.userName=this.props.userInfo.username;
        }

        return (
            <Layout style={{width:'100%',height:'100%'}} >
                <Header  style={{height:'80px',backgroundColor:'#f0d5e2',display:'flex',justifyContent:'space-between',padding:0}}>
                    <div style={{ display:'flex',alignItems:'center',float:'left'}}>
                        <img style={{width:'80px',height:'80px',marginRight:'30px'}} src={logo} />
                        <span style={{ whiteSpace: 'nowrap',height:'60px',color:'#259b24',fontSize:'26px',fontWeight:'bold',marginRight:'30px'}}
                        > 蓝 盾 O3 立 体 监 测 分 析 平 台</span>

                        <span style={{ whiteSpace: 'nowrap',height:'60px',color:'white',fontSize:'10px'}}>
                            {'欢迎您：'+this.state.userName}</span>
                    </div>
                    <div style={{ display:'flex',alignItems:'center',flexDirection:"row",float:'right'}}>
                        <MainMenu />
                        <div style={{display:'inline-block',width:'80px'}}>
                            <Button type="danger" shape="circle" icon="logout" onClick={this.logOut}/>
                        </div>
                    </div>
                </Header>
                <div style={{width:'100%',display:'flex',height:'100%'}} >
                {
                    this.props.location.pathname!=='/main/monitor'?<SideRoute/>:null
                }
                    <div style={{width: '100%',height:'100%'}}>
                        <ContentRoute/>
                    </div>
                </div>
            </Layout>
        );
    }

    logOut(){
        this.props.history.push('/login');
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.Login.userInfo,
        msgTip:state.MsgTip,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        submitClick: (param) => {
            dispatch(act.loginSubmit(param))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(mainPage);

