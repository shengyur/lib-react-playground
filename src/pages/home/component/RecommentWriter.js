import React from "react";
import styled from "styled-components";
import { SearchInfoSwitch } from "../../../common/header/style";

const RecommendWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
`;

const RecommendTitle = styled.div`
  text-align: left;
`;

const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
  padding-left: 0;
`;

export default class Recommend extends React.Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendTitle>
          推荐作者
          <SearchInfoSwitch>
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
        </RecommendTitle>
        <WriterList>1</WriterList>
      </RecommendWrapper>
    );
  }
}
