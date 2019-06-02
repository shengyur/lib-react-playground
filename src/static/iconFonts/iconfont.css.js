import { createGlobalStyle } from "styled-components";

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1559475286294'); /* IE9 */
  src: url('./iconfont.eot?t=1559475286294#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1559475286294') format('woff'),
  url('./iconfont.ttf?t=1559475286294') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1559475286294#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  margin-right:2px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before {
    content: "\e851";
  }
  
  .icon-iconset0394:before {
    content: "\e711";
  }
  
  .icon-bi:before {
    content: "\e608";
  }
  
  .icon-Aa:before {
    content: "\e636";
  }
  
  .icon-quanxianshenpi:before {
    content: "\eb65";
  }
  
  .icon-Magnifier:before {
    content: "\e62d";
  }
  
  .icon-duomeitiicon-:before {
    content: "\e60e";
  }  
`
