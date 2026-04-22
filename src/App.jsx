import React from "react";
import Navbar from "./navber";
import Header from "./header";
import Grid from "./grid";
import MyHomeImage from "./ok";
import Homeimg from "./Next";
// import HomePage from "./HomePage";
// import Grid from "./grid";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Grid />
      <h6 className="h6">Explore More Articles</h6>
      <MyHomeImage />
      <Homeimg/>
    </div>
  );
};

export default App;
