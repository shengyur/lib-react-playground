import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Register,
  WriteNow,
  Beta,
  Login,
  Betablock,
  Letterblock,
  SearchWrapper,
  SearchInput,
  SearchBtn
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {handleFocusAction,handleBlurAction} from "./store/actionCreaters";


function Header(props){
    return (
      <HeaderWrapper>
        <Logo />
        <WriteNow className="btn">
          <i className="iconfont">&#xe608;</i>
          写文章
        </WriteNow>
        <Register className="btn">注册</Register>
        <Login className="btn">登录</Login>
        <Betablock>
          <Beta />
        </Betablock>
        <Letterblock>
          <i className="iconfont">&#xe636;</i>
        </Letterblock>
        <div>
          <Nav>
            <NavItem>
              <a href="/">首页</a>
            </NavItem>
            <NavItem>
              <span>下载App</span>
            </NavItem>
            <NavItem style={{ paddingLeft: "15px" }}>
              <SearchWrapper>
                <CSSTransition
                  in={props.focused}
                  timeout={200}
                  classNames="slide-transition"
                >
                  <SearchInput
                    className={props.focused ? "focusIn" : ""}
                    onFocus={props.handleFocus}
                    onBlur={props.handleBlur}
                  />
                </CSSTransition>
                <SearchBtn className={props.focused ? "focusIn" : ""}>
                  <i className="iconfont">&#xe62d;</i>
                </SearchBtn>
              </SearchWrapper>
            </NavItem>
          </Nav>
        </div>
      </HeaderWrapper>
    );
}

const mapStateToProps = state => {
  return {
    // focused:state.header.get("focused")
    focused:state.getIn(['header','focused'])
  }
};

const mapDispacthToProps = dispatch => {
    return {
        handleFocus:()=>{
            dispatch(handleFocusAction())
        },
        handleBlur:()=>{
            dispatch(handleBlurAction())
        }
    }
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Header);
