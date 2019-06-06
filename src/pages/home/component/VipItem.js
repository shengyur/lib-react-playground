import React from "react";
import styled from "styled-components";

const ItemImg = styled.img`
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
`;

export default class VipItem extends React.Component {
  render() {
    return (
      <div>
        <a>
          <ItemImg
            src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
            alt="Banner s club"
          />
        </a>
        <a>
          <ItemImg
            src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
            alt="Banner s club"
          />
        </a>
        <a>
          <ItemImg
            src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
            alt="Banner s club"
          />
        </a>
        <a>
          <ItemImg
            src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
            alt="Banner s club"
          />
        </a>
      </div>
    );
  }
}
