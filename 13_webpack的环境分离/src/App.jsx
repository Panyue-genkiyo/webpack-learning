import React from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Hello from "pages/Hello";
import About from "pages/About";

const App = () => {
  return (
    <div>
      <h1>hello react app router</h1>
      <hr/>
      <BrowserRouter>
        <Link to='/hello'>hello react js</Link>
        <Link to='/about'>hello about</Link>
        <Routes>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;