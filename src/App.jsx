import React from "react";

import {
  Header,
  Nav,
  Services,
  Banner,
  About,
  Work,
  Contact,
} from "./components/";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
