import React from "react";
import {
  ReadMore,
  ListItem,
  ListContent,
  ListTitle,
  ListWrapper
} from "../style";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <ListWrapper>
        <ul>
          {list.map(item => {
            return (
              <ListItem key={item.get("id")}>
                <img src={item.get("imgUrl")} alt="文章图片" />
                <div style={{ paddingRight: "165px" }}>
                  <ListTitle className="title" target="_blank">
                    {item.get("title")}
                  </ListTitle>
                  <ListContent>{item.get("content")}</ListContent>
                </div>
              </ListItem>
            );
          })}
        </ul>
        <ReadMore>阅读更多</ReadMore>
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.get("home").get("homeList")
  };
};

export default connect(
  mapStateToProps,
  null
)(List);
