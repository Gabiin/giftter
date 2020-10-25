import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "wouter";

//Provider
import { UserContextProvider } from "./context/userContext";

//css
import "./index.css";

//components
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

//pages
import Giftter from "./pages/giftter_page";
import Error_Page from "./pages/error_page";
import Login from "./pages/login_page";
import Register from "./pages/register_page";
import MyGiftter from "./pages/myGiftter_page";
import ProfilePage from "./pages/profile_page";

const Home = React.lazy(() => import("./pages/home_page"));
const Search = React.lazy(() => import("./pages/search_page"));

const App = () => {
  return (
    <UserContextProvider>
      <Suspense fallback={null}>
        <Nav></Nav>
        <SearchBar></SearchBar>
        <Switch>
          <Route path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/search/:keyword" component={Search}></Route>
          <Route path="/giftter/:id" component={Giftter}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/mygiftter" component={MyGiftter}></Route>
          <Route path="/profile" component={ProfilePage}></Route>
          <Route path="/:rest*" component={Error_Page}></Route>
        </Switch>
      </Suspense>
    </UserContextProvider>
  );
};

export default App;
