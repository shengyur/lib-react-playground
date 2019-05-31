import styled from "styled-components";
import iconPic from "../../static/logo.png";
import betaPic from "../../static/beta.png";

export const HeaderWrapper = styled.nav`
  background-color: #fff;
  border: 1px solid #f0f0f0;
  width: 100%;
  height: 56px;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  float: left;
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${iconPic});
  background-size: contain;
`;
export const Letterblock = styled.a`
  float: right;
  line-height: 20px;
  padding: 17px 10px;
  font-size: 24px;
  color: #969696;
  i {
    font-size: 22px;
  }
`;

export const Betablock = styled.span`
  display: inline-block;
  float: right;
  height: 55px;
  padding: 15px 0px;
  margin: 0 12px;
`;

export const Beta = styled.img.attrs({
  src: betaPic
})`
  float: right;
  display: inline-block;
  height: 25px;
`;

export const Login = styled.a`
  color: #969696;
  float: right;
  margin: 14px 6px 0 10px;
  font-size: 15px;
`;

export const Register = styled.a`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
`;
export const WriteNow = styled.a`
  float: right;
  width: 100px;
  height: 40px;
  line-height: 24px;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
`;

export const Nav = styled.ul`
  float: left;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
  padding-left: 50px;
`;

export const NavItem = styled.li`
  float: left;
  margin-right: 10px;
  span {
    padding: 0 15px;
  }
  a {
    color: #ea6f5a;
    width: 56px;
    height: 56px;
    line-height: 26px;
    padding: 15px;
  }
`;
export const SearchWrapper = styled.form`
  display: block;
  box-sizing: border-box;
  margin: 0 0 20px;
  position: relative;
  top: -2px;
  /* This fires as soon as the element enters the DOM */
  .slide-transition-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  /* This is where we can add the transition*/
  .slide-transition-enter-active {
    width: 240px;
  }
  /* This fires as soon as the this.state.showList is false */
  .slide-transition-exit {
    transition: all 0.2s ease-in-out;
  }
  /* fires as element leaves the DOM*/
  .slide-transition-exit-active {
  }
`;

export const SearchInput = styled.input.attrs({
  placeholder: "搜索"
})`
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  text-shadow: none;
  outline: none;
  &.focusIn {
    width: 240px;
  }
`;

export const SearchBtn = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top: 51%;
  right: -10px;
  transform: translate(-50%, -50%);
  width: 30px !important;
  height: 30px !important;
  line-height: 30px !important;
  padding: 0 !important;
  color: #969696 !important;
  text-align: center;

  &.iconfont {
    font-size: 18px;
  }
  &.focusIn {
    color: #fff !important;
    background-color: #999;
    border-radius: 15px;
  }
`;
