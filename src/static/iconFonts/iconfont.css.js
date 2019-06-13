import { createGlobalStyle } from "styled-components";

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1560395709195'); /* IE9 */
  src: url('./iconfont.eot?t=1560395709195#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1560395709195') format('woff'),
  url('./iconfont.ttf?t=1560395709195') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1560395709195#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  margin-right:2px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-backtop:before {
  content: "\e606";
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

.icon-share:before {
  content: "\e64c";
}

.icon-Magnifier:before {
  content: "\e62d";
}

.icon-duomeitiicon-:before {
  content: "\e60e";
}
`
