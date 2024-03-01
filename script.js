// React component
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "" };

    // Change code below this line

    // Change code above this line
  }

  // Change code below this line
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  // Change code above this line
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("textarea", {
        value: this.state.markdown,
        onChange: e => {this.updateMarkdown(e.target.value);
        } },

      console.log(this.state.markdown)), /*#__PURE__*/

      React.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.markdown } }), /*#__PURE__*/

      React.createElement(Output, null)));


  }}


const Output = (props) => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("h4", null, "Controlled Input:"), /*#__PURE__*/
React.createElement("div", null, props.output));



const randomColor = () => {
  const hexadecimalNumbers = "0123456789ABCDEF";
  let colour = "#";
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



ReactDOM.render( /*#__PURE__*/React.createElement(Input, null), document.getElementById("editor"));

ReactDOM.render(JSX, document.getElementById("test"));
