import React from "react";
import Footer from "./footer";
import Header from "./header";
const Container = ({ children }) => {
  return (
    <div>
      <div className="container">
        <Header />
        <main className="main">{children}</main>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Container;
