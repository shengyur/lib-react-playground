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
