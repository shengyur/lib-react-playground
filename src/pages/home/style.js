import styled from "styled-components";

export const BannerPic = styled.img.attrs()`
  height: 270px;
`;

export const ContentWrapper = styled.section`
  border: 1px solid #ddd;
  width: 960px;
  margin: 0 auto;
  min-height: 100px;
`;

export const ContentLeft = styled.article`
  background-color: orange;
  width: 66%;
  float: left;
`;

export const ContentRight = styled.article`
  background-color: blue;
  width: 34%;
  float: right;
`;
