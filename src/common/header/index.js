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
  SearchBtn,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  SearchThrowBlock
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as actionCreaters from "./store/actionCreaters";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.spinEle = React.createRef();
  }
  getListArea = show => {
    const {
      list,
      page,
      handleMouseIn,
      handleMouseLeave,
      handlePageChange,
      mouseIn,
      totalPage
    } = this.props;
    const showList = [];
    if (list.toJS().length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (list.toJS()[i]) {
          showList.push(
            <SearchInfoItem key={list.toJS()[i]}>
              {list.toJS()[i]}
            </SearchInfoItem>
          );
        }
      }
    }

    if (show || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseLeave}
        >
          <SearchThrowBlock />
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() =>
                handlePageChange(page, totalPage, this.spinEle.current)
              }
            >
              <i
                className="iconfont"
                style={{
                  fontSize: "13px",
                  transform: "rotate(0deg)",
                  transformoOigin: "center center"
                }}
                ref={this.spinEle}
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>

          <SearchInfoList>{showList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { focused, handleFocus, handleBlur } = this.props;

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
              <a href="/" className="mainPage">
                <i className="iconfont">&#xe711;</i>首页
              </a>
            </NavItem>
            <NavItem>
              <span>
                <i className="iconfont">&#xe60e;</i>下载App
              </span>
            </NavItem>
            <NavItem style={{ paddingLeft: "15px" }}>
              <SearchWrapper>
                <CSSTransition
                  in={focused}
                  timeout={200}
                  classNames="slide-transition"
                >
                  <SearchInput
                    className={focused ? "focusIn" : ""}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </CSSTransition>
                <SearchBtn className={focused ? "focusIn" : ""}>
                  <i className="iconfont">&#xe62d;</i>
                </SearchBtn>
                {this.getListArea(focused)}
              </SearchWrapper>
            </NavItem>
          </Nav>
        </div>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    // focused:state.header.get("focused")
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"])
  };
};

const mapDispacthToProps = dispatch => {
  return {
    handleFocus: () => {
      dispatch(actionCreaters.getList());
      dispatch(actionCreaters.handleFocusAction());
    },
    handleBlur: () => {
      dispatch(actionCreaters.handleBlurAction());
    },
    handleMouseIn: () => {
      dispatch(actionCreaters.handleMouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(actionCreaters.handleMouseLeave());
    },
    handlePageChange: (page, totalPage, spinDom) => {
      console.log(spinDom, spinDom.style.transform);
      debugger;
      let remote = Number(spinDom.style.transform.match(/\d+/g)[0]);
      remote += 360;
      spinDom.style.transform = `rotate(${remote}deg)`;

      if (page < totalPage) {
        dispatch(actionCreaters.changePage(page + 1));
      } else {
        dispatch(actionCreaters.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Header);
