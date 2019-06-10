import React from "react";
import { SearchInfoSwitch } from "../../../common/header/style";
import {
  RecommendWrapper,
  RecommendTitle,
  WriterList,
  WriterListItem,
  ItemPic
} from "../style";
import {connect} from "react-redux";

class RecommentWriter extends React.Component {
  render() {
      const {writerList} = this.props;
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
        {
            writerList.map((item)=>{
                return (<WriterListItem key={item.get("id")}>
                        <ItemPic>
                        <img
                            src={item.get("avatar_source")}
                            alt="作者头像"
                        />
                        </ItemPic>
                        <a href="/" className="focusIn">
                        <i>+</i>关注
                        </a>
                        <a href="/" className="story">
                        {item.get("nickname")}
                        </a>
                        <p className="likeNum">写了{item.get("total_wordage")}字 · {item.get("total_likes_count")}喜欢</p>
                    </WriterListItem>)
            })
        }
          </WriterList>
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        writerList:state.getIn(['home','recommentWriterList'])
    }
}
export default connect(mapStateToProps,null)(RecommentWriter)
