import React from "react";
import { SearchInfoSwitch } from "../../../common/header/style";
import {
  RecommendWrapper,
  RecommendTitle,
  WriterList,
  WriterListItem,
  ItemPic
} from "../style";

export default class RecommentWriter extends React.Component {
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
        <WriterList>
          <WriterListItem>
            <ItemPic>
              <img
                src="https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
            </ItemPic>
            <a href="/" className="focusIn">
              <i>+</i>关注
            </a>
            <a href="/" className="story">
              茶点故事
            </a>
            <p className="likeNum">写了356.5k字 · 10.5k喜欢</p>
          </WriterListItem>
        </WriterList>
      </RecommendWrapper>
    );
  }
}
