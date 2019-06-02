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



class Header extends React.Component{
    

    getListArea = (show)=>{
        const {list,page} = this.props;
        const showList = [];
        for(let i=(page-1)*10;i<page*10;i++){
            showList.push(list.toJS()[i])
        }

        if(show){
            return <SearchInfo>
                <SearchThrowBlock/>
                <SearchInfoTitle>热门搜索
                    <SearchInfoSwitch>
                        <i className="iconfont" style={{fontSize:"13px"}}>&#xe851;</i>换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                
                <SearchInfoList>
                    {
                        showList.map((item)=>{
                            return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                    }
                </SearchInfoList>
            </SearchInfo>
        }else{
            return null;
        }
    }

    render(){
        const {focused,handleFocus,handleBlur} = this.props;

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
                    <i className="iconfont">&#xe711;</i>首页</a>
                  </NavItem>
                  <NavItem>
                    <span>
                    <i className="iconfont">&#xe60e;</i>下载App</span>
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
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page'])
  }
};

const mapDispacthToProps = dispatch => {
    return {
        handleFocus:()=>{
            dispatch(actionCreaters.getList())
            dispatch(actionCreaters.handleFocusAction())
        },
        handleBlur:()=>{
            dispatch(actionCreaters.handleBlurAction())
        }
    }
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Header);
