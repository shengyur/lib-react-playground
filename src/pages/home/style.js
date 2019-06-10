import styled from "styled-components";

export const BannerPic = styled.img.attrs({
  src:
    "https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
})`
  height: 270px;
  border-radius: 10px;
`;

export const ContentWrapper = styled.section`
  width: 960px;
  margin: 0 auto;
  min-height: 100px;
  padding-top: 30px;
`;

export const ContentLeft = styled.article`
  width: 65%;
  float: left;
`;

export const ContentRight = styled.article`
  width: 30%;
  float: right;
`;

// list
export const ListWrapper = styled.div`
  margin-top: 30px;
`;

export const ListTitle = styled.h1`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}`;

export const ListContent = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  img {
    width: 150px;
    position: absolute;
    right: 0;
    width: 125px;
    height: 100px;
    border-radius: 5px;
  }
`;

export const ReadMore = styled.a`
  display: block;
  width: 100%;
  background-color: #a5a5a5;
  height: 40px;
  margin: 30px auto 60px;
  padding: 12px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  &:hover {
    background-color: #9b9b9b;
  }
`;

// RecommentWriter
export const RecommendWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  li {
    line-height: 20px;
  }
`;

export const RecommendTitle = styled.div`
  text-align: left;
  color: #969696;
`;

export const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
  padding-left: 0;
`;

export const WriterListItem = styled.li`
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

export const ItemPic = styled.a.attrs({
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

// VipItem
export const ItemImg = styled.img`
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
`;
