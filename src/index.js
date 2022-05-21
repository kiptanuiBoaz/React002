import React from "react";
import ReactDOM from "react-dom";

const loremPicsum = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="img-google"
        alt="some text"
        src="https://miro.medium.com/max/1400/1*9nBZ06R-zpK0yyEtoHcvIw.jpeg"
      />
      <img
        className="img-google"
        alt="some text"
        src="https://media.istockphoto.com/photos/software-developer-programming-code-on-computer-picture-id488651322"
      />
      <img
        className="img-google"
        alt="some text"
        src="https://previews.123rf.com/images/ammina/ammina1912/ammina191200009/138389815-web-developer-programming-code-software-javascript-abstract-computer-script-random-parts-of-program-.jpg"
      />
      <img src={loremPicsum} />
    </div>
  </div>,
  document.getElementById("root")
);
