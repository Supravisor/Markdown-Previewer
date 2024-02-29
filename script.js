import ReactDOM from "https://esm.sh/react-dom";

let marked = ("marked");

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
    // Change code below this line
    
    // Change code above this line
  }
  
  // Change code below this line
  updateMarkdown(markdown) {
    this.setState({markdown});
  }

  // Change code above this line
  render() {
    return (
      <div>
        <textarea
          value={this.state.markdown}
          onChange={(e) => { this.updateMarkdown(e.target.value);
          }}
        >
          {console.log(this.state.markdown)}
        </textarea>
        <div dangerouslySetInnerHTML = {{ __html: (this.state.markdown) }}>
        </div>
        <Output  />
      </div>
    );
  }
}

const Output = (props) => (
  <div>
    <h4>Controlled Input:</h4>
    <div>{props.output}</div>
  </div>
);

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

const JSX = (
  <div style={{ background: colour }}>
    <h1 style={{ color: backColour }}>Hello World</h1>
  </div>
);

ReactDOM.render(<Input />, document.getElementById("editor"));

ReactDOM.render(JSX, document.getElementById("test"));
