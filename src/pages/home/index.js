import React from "react";
import List from "./component/List";
import VipItem from "./component/VipItem";
import RecommentWriter from "./component/RecommentWriter";
import {
  ContentWrapper,
  ContentLeft,
  ContentRight,
  BannerPic
} from "./style.js";

export default class Detail extends React.Component {
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
      </ContentWrapper>
    );
  }
}
