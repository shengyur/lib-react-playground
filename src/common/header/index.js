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
import { INPUT_FOCUSED, INPUT_NOT_FOCUSED } from "../../store/actionTypes";
import { connect } from "react-redux";

class Header extends React.Component {
  handleFocus = () => {
    this.setState({
      foused: true
    });
  };

  handleBlur = () => {
    this.setState({
      foused: false
    });
  };

  render() {
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
                  in={this.props.foused}
                  timeout={200}
                  classNames="slide-transition"
                >
                  <SearchInput
                    className={this.props.foused ? "focusIn" : ""}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                  />
                </CSSTransition>
                <SearchBtn className={this.props.foused ? "focusIn" : ""}>
                  <i className="iconfont">&#xe62d;</i>
                </SearchBtn>
              </SearchWrapper>
            </NavItem>
          </Nav>
        </div>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  const defaultState = {
    foused: false
  };

  return (state = defaultState, action) => {
    switch (action.type) {
      case INPUT_FOCUSED:
        return Object.assign({}, state, {
          foused: true
        });
      case INPUT_NOT_FOCUSED:
        return Object.assigin({}, state, {
          foused: false
        });
      default:
        return state;
    }
  };
};

const mapDispacthToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Header);
