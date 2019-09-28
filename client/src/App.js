import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
