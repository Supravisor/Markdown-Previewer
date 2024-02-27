import ReactDOM from "https://esm.sh/react-dom";


const randomColor = () => {
  const hexadecimalNumbers = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += hexadecimalNumbers[Math.floor(Math.random() * 16)];
  }
  return colour;
};

let colour = randomColor();

let reverseColour = () => {
  let tempColour = colour.slice();
  let reversedColour = tempColour[0];
  for (let i = 6; i > 0; i--) {
    reversedColour += tempColour[i];
  }
  return reversedColour;
};

let backColour = reverseColour();

const JSX = /*#__PURE__*/
React.createElement("div", { style: { background: colour } }, /*#__PURE__*/
React.createElement("h1", { style: { color: backColour } }, "Hello World"));



ReactDOM.render(JSX, document.getElementById('test'));
