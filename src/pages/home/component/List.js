import React from "react";
import {
  ReadMore,
  ListItem,
  ListContent,
  ListTitle,
  ListWrapper
} from "../style";
import { connect } from "react-redux";
import * as actionTypes from "../store/actionTypes";
import {actionCreaters} from "../store"

class List extends React.Component {
  render() {
    const { list,loadMore } = this.props;
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
        <ReadMore onClick={loadMore}>阅读更多</ReadMore>
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.get("home").get("homeList")
  };
};

const mapDispatchToProps = (dispatch)=>({
    loadMore:()=>{
        console.log(actionTypes.loadMoreList)
        const action = actionCreaters.loadMoreInfo();
        dispatch(action)
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
