import React from "react";
import List from "./component/List";
import ReadMore from "./component/ReadMore";
import VipItem from "./component/VipItem";
import DownloadApp from "./component/DownloadApp";
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
          <ReadMore />
        </ContentLeft>
        <ContentRight>
          <VipItem />
          <DownloadApp />
          <RecommentWriter />
        </ContentRight>
      </ContentWrapper>
    );
  }
}
