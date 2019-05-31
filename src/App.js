import React from "react";
import { ResetStyle, GlobalStyle } from "./reset.css";
import { IconStyle } from "./static/iconFonts/iconfont.css";
import Header from "./common/header";
import store from "./store"
import {Provider} from 'react-redux';

function App() {
  return (
    <div>
      <IconStyle />
      <ResetStyle />
      <GlobalStyle />
      <Provider store={store}>
          <Header/>
      </Provider>
    </div>
  );
}

export default App;
