import { ReactDOM, render } from "react-dom";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import PointCloud from "./pointcloud";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Nav from "./Nav";

const AppStyles = styled.div`
  header {
    position: static;

    z-index: 1000;
  }

  main {
    display: flex;

    & .top {
      width: 100%;
    }
  }
`;

export default function App() {
  return (
    <AppStyles id="canvas-container">
      <main>
        <Sidebar />
        <div className="top">
          <Nav />
          <PointCloud />
        </div>
      </main>
    </AppStyles>
  );
}

render(<App />, document.getElementById("root"));
