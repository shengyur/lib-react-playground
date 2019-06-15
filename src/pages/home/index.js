import React from "react";
import List from "./component/List";
import VipItem from "./component/VipItem";
import RecommentWriter from "./component/RecommentWriter";
import SideTools from "../../common/sideTool";
import {
  ContentWrapper,
  ContentLeft,
  ContentRight,
  BannerPic
} from "./style.js";
import {connect} from 'react-redux';
import {actionCreaters} from './store';

class Home extends React.PureComponent{

    componentDidMount(){
        this.props.changeHomeData()
    }

  render() {
    return (
      <ContentWrapper>
        <ContentLeft>
          <BannerPic />
          <List />
        </ContentLeft>
        <ContentRight>
          <VipItem />
          <RecommentWriter />
        </ContentRight>
        <SideTools/>
      </ContentWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        const action = actionCreaters.getHomeInfo();    
        dispatch(action) 
    }
})

export default connect(null,mapDispatchToProps)(Home)