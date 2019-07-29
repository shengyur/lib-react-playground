import React from "react";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actionCreaters from './store/actionCreaters'
import {LoginWrapper,LoginBox,LoginInput,Button} from "./style";

class Login extends React.PureComponent {
    render() {
        const {loginFlag} = this.props;
        if(!loginFlag){
            return <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="账号" ref={(input)=>{this.account = input}}/>
                        <LoginInput placeholder="密码" type="password" ref={(input)=>{this.password = input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}> 登陆 </Button>
                    </LoginBox>
                </LoginWrapper>; 
        }else{
            return <Redirect to='/' />
        }
    }
} 
  
const mapStateToProps = (state)=>({
    loginFlag:state.getIn(['login','isLogin'])
})

const mapDispatchToProps = (dispatch)=>({
    login(account,password){
        dispatch(actionCreaters.login())
        console.log(account,password);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
