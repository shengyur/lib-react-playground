import React from "react";
import { ResetStyle, GlobalStyle } from "./reset.css";
import { IconStyle } from "./static/iconFonts/iconfont.css";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";

function App() {
  return (
    <React.Fragment>
      <IconStyle />
      <ResetStyle />
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
