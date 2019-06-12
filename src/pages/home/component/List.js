import React from "react";
import {
  ReadMore,
  ListItem,
  ListContent,
  ListTitle,
  ListWrapper
} from "../style";
import { connect } from "react-redux";
import {actionCreaters} from "../store";
import {Link} from "react-router-dom";

class List extends React.Component {
  render() {
    const { list,loadMore,page } = this.props;
    return (
      <ListWrapper>
        <ul>
          {list.map((item,index) => {
            return (
                <Link key={index} to="/detail">
                    <ListItem>
                        <img src={item.get("imgUrl")} alt="文章图片" />
                        <div style={{ paddingRight: "165px" }}>
                        <ListTitle className="title" target="_blank">
                            {item.get("title")}
                        </ListTitle>
                        <ListContent>{item.get("content")}</ListContent>
                        </div>
                    </ListItem>
              </Link>
            );
          })}
        </ul>
        <ReadMore onClick={()=>loadMore(page)}>阅读更多</ReadMore>
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.get("home").get("homeList"),
    page:state.get("home").get("articlePage")
  };
};

const mapDispatchToProps = (dispatch)=>({
    loadMore:(page)=>{
        const action = actionCreaters.loadMoreInfo(page);
        dispatch(action)
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
