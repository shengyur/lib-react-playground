import React, { Fragment } from "react";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends React.PureComponent {
    render() {
        const {loginFlag} = this.props;
        if(loginFlag){
            return <Fragment>
                写文章页面！
            </Fragment>
        }else{
            return <Redirect to='/login'/>
        }
    }
} 
  
const mapStateToProps = (state)=>({
    loginFlag:state.getIn(['login','isLogin'])
})


export default connect(mapStateToProps,null)(Write)
