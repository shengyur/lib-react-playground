import React from "react";
import { ResetStyle, GlobalStyle } from "./reset.css";
import { IconStyle } from "./static/iconFonts/iconfont.css";
import Header from "./common/header";

function App() {
  return (
    <div>
      <IconStyle />
      <ResetStyle />
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
