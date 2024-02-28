import ReactDOM from "https://esm.sh/react-dom";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
    handleChange (event) {
    this.setState({
      input: event.target.value
    });
  }

  // Change code above this line
  render() {
    return (
      <div>
      <textarea value = {this.state.input} onChange = {this.handleChange} ></textarea>
  <Output output={this.state.input} />
      </div>
    );
  }
};

// Test this
const Output = (props) => <div>
    <h4>Controlled Input:</h4>
        <p>{props.output}</p>     
      </div>;


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
  for (let i = 6; i > 0 ; i--) {
    reversedColour += tempColour[i];
  } 
    return reversedColour;
}

let backColour = reverseColour();

const JSX = (
  <div style={{background: colour }}>
    <h1 style={{color: backColour }}>Hello World</h1>
  </div>
);

ReactDOM.render(<Input />, document.getElementById('editor'));
ReactDOM.render(JSX, document.getElementById('test'));
