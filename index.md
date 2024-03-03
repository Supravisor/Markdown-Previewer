
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Markdown Previewer</title>
<style>
body {
  background: Crimson;
  margin-left: 26vw;
}

#editor {
  background: transparent;
  padding: 0px;
}

#preview {
  background: Coral;
}

#preview, #editor {
  display: inline-block;
  height: 60vh;
  width: 40%;
}

textarea {
  height: 55vh;
  width: 90%;
}

</style>

  <link rel="stylesheet" href="./style.css">

</head>
<body>

  <div id="editor"></div>
  <div id="preview"></div>

<div id="test"></div>

  <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.0/marked.min.js'></script>
  <script type="module">
import ReactDOM from "https://esm.sh/react-dom";

let marked = "marked";

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
</script>

</body>
</html>
