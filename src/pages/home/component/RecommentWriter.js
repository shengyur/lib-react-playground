import React from "react";
import styled from "styled-components";
import { SearchInfoSwitch } from "../../../common/header/style";

const RecommendWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  li {
    line-height: 20px;
  }
`;

const RecommendTitle = styled.div`
  text-align: left;
  color: #969696;
`;

const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
  padding-left: 0;
`;

const WriterListItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  .focusIn {
    float: right;
    margin-top: 5px;
    color: #42c02e;
    font-size: 13px;
  }
  .likeNum {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .story {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    margin: 0 0 10px;
  }
`;

const ItemPic = styled.a.attrs({
  href: "/"
})`
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  img {
    float: left;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
`;

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
            <a className="focusIn">
              <i>+</i>关注
            </a>
            <a className="story">茶点故事</a>
            <p className="likeNum">写了356.5k字 · 10.5k喜欢</p>
          </WriterListItem>
          <WriterListItem>
            <ItemPic>
              <img
                src="https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
            </ItemPic>
            <a className="focusIn">
              <i>+</i>关注
            </a>
            <a className="story">茶点故事</a>
            <p className="likeNum">写了356.5k字 · 10.5k喜欢</p>
          </WriterListItem>
          <WriterListItem>
            <ItemPic>
              <img
                src="https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
            </ItemPic>
            <a className="focusIn">
              <i>+</i>关注
            </a>
            <a className="story">茶点故事</a>
            <p className="likeNum">写了356.5k字 · 10.5k喜欢</p>
          </WriterListItem>
          <WriterListItem>
            <ItemPic>
              <img
                src="https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
            </ItemPic>
            <a className="focusIn">
              <i>+</i>关注
            </a>
            <a className="story">茶点故事</a>
            <p className="likeNum">写了356.5k字 · 10.5k喜欢</p>
          </WriterListItem>
          <WriterListItem>
            <ItemPic>
              <img
                src="https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
            </ItemPic>
            <a className="focusIn">
              <i>+</i>关注
            </a>
            <a className="story">茶点故事</a>
            <p className="likeNum">写了356.5k字 · 10.5k喜欢</p>
          </WriterListItem>
        </WriterList>
      </RecommendWrapper>
    );
  }
}
