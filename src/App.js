import React from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,Register,WriteNow,Beta,Login,Betablock,Letterblock} from './style/main.css'
import {ResetStyle, GlobalStyle} from './style/reset.css'
import {IconStyle} from './static/iconFonts/iconfont.css';

function App() {
  return (
      <HeaderWrapper>
        <IconStyle/>
        <ResetStyle />
        <GlobalStyle />
            <Logo/>
            <WriteNow className="btn">
              <i className="iconfont">&#xe608;</i>
              写文章
            </WriteNow>
            <Register className="btn">注册</Register>
            <Login className="btn">登录</Login>
            <Betablock>
              <Beta></Beta>
            </Betablock>
            <Letterblock>
              <i className="iconfont">&#xe636;</i>
            </Letterblock>
            <div>
              <Nav>
                <NavItem><a href="/">首页</a></NavItem>
                <NavItem><span>下载App</span></NavItem>
                <NavItem style={{paddingLeft:"15px"}}>
                  <form>
                    <input placeholder="搜索"/>
                    <a className="searchBtn" href="/">
                      <i className="iconfont">&#xe62d;</i>
                    </a>
                  </form>
                </NavItem>
              </Nav>
            </div>
      </HeaderWrapper>
  );
}

export default App;
