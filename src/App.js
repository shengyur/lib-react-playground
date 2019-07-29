import React from "react";
import { ResetStyle, GlobalStyle } from "./reset.css";
import { IconStyle } from "./static/iconFonts/iconfont.css";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Home from "./pages/home";
import Write from "./pages/write";

function App() {
  return (
    <React.Fragment>
      <IconStyle />
      <ResetStyle />
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
            <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" exact component={Login} />
          <Route exact path="/write" exact component={Write} />
          <Route path="/detail/:id" exact component={Detail} />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
