import React from "react";
import "./App.css";
import ImageToggle from "./components/ImageToggle";
// import contextAPI from "./components/contextAPI";
import img1 from "./image/image1.jpg";
import img11 from "./image/image11.jpg";
import img2 from "./image/image2.jpg";
import img22 from "./image/image22.jpg";
import img3 from "./image/3.jpg";
import img33 from "./image/33.jpg";
import img4 from "./image/4.jpeg";
import img44 from "./image/44.jpg";
import img5 from "./image/5.jpg";
import img55 from "./image/55.jpg";
import img6 from "./image/6.jpg";
import img66 from "./image/66.jpg";
import img7 from "./image/7.jpg";
import img77 from "./image/77.jpg";
import img8 from "./image/8.jpg";
import img88 from "./image/88.jpg";

function App() {
  return (
    <div className="App">
      <ImageToggle primery={img1} secondery={img11} />
      <ImageToggle primery={img2} secondery={img22} />
      <ImageToggle primery={img3} secondery={img33} />
      <ImageToggle primery={img4} secondery={img44} />
      <ImageToggle primery={img5} secondery={img55} />
      <ImageToggle primery={img6} secondery={img66} />
      <ImageToggle primery={img7} secondery={img77} />
      <ImageToggle primery={img8} secondery={img88} />
    </div>
  );
}

export default App;
