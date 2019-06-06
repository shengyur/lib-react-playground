import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin-top: 30px;
`;

const ListTitle = styled.h1`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}`;

const ListImg = styled.img.attrs({
  src:
    "https://upload-images.jianshu.io/upload_images/1769036-fca1085c89484298.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
})`
  width: 150px;
  position: absolute;
  right: 0;
  width: 125px;
  height: 100px;
  border-radius: 5px;
`;

const ListContent = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
`;

const ReadMore = styled.a`
  display: block;
  width: 100%;
  background-color: #a5a5a5;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
`;

export default class List extends React.Component {
  render() {
    return (
      <ListWrapper>
        <ul>
          <ListItem>
            <ListImg />
            <div style={{ paddingRight: "165px" }}>
              <ListTitle className="title" target="_blank">
                这八个字，可治愈大部分心理疾病！
              </ListTitle>
              <ListContent>
                高中的几年，深受心理疾病的侵害，失眠，焦虑，恐惧，分心，反正能发生的症状都有。
                然后，我开始研究心理学，尝试各种方法，进行自我疗愈。
                俗话说，久...
              </ListContent>
            </div>
          </ListItem>
          <ListItem>
            <ListImg />
            <div style={{ paddingRight: "165px" }}>
              <ListTitle className="title" target="_blank">
                这八个字，可治愈大部分心理疾病！
              </ListTitle>
              <ListContent>
                高中的几年，深受心理疾病的侵害，失眠，焦虑，恐惧，分心，反正能发生的症状都有。
                然后，我开始研究心理学，尝试各种方法，进行自我疗愈。
                俗话说，久...
              </ListContent>
            </div>
          </ListItem>
          <ListItem>
            <ListImg />
            <div style={{ paddingRight: "165px" }}>
              <ListTitle className="title" target="_blank">
                这八个字，可治愈大部分心理疾病！
              </ListTitle>
              <ListContent>
                高中的几年，深受心理疾病的侵害，失眠，焦虑，恐惧，分心，反正能发生的症状都有。
                然后，我开始研究心理学，尝试各种方法，进行自我疗愈。
                俗话说，久...
              </ListContent>
            </div>
          </ListItem>
        </ul>
        <ReadMore>阅读更多</ReadMore>
      </ListWrapper>
    );
  }
}
