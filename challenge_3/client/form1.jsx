import TextInput from './textinput.js';

class Form1 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      email: '',
      pass: '',
      formNum: 'form1'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (event) {
    const target = event.target;
    const value = target.value;
    const property = target.name;
    let newState = Object.assign({}, this.state);
    newState[property] = value;
    console.log(newState);
    this.setState(newState);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.handleNext(this.state);
  }

  render () {
    let label = ['Name: ', 'Email: ', 'Password: '];
    let properties = ['name', 'email', 'pass'];
    let types = ['text', 'text', 'password'];
    let state = this.state;
    return (

            <form onSubmit={this.handleSubmit}>
            <h1>Form 1</h1>
              {label.map((input, index) =>
              <TextInput name={properties[index]}
              value={this.state[properties[index]]}
              inputType={types[index]}
              label={label[index]}
              change={this.handleInput}
              key={index}
              />
              )}
              <button>Next</button>
            </form>
    )
  }
}

export default Form1;

{/* <TextInput name={properties[0]}
value={this.state[properties[0]]}
inputType={types[0]}
label={inputs[0]}
change={this.handleInput}
/>
<br/>
<TextInput name={properties[1]}
value={this.state[properties[1]]}
inputType={types[1]}
label={inputs[1]}
change={this.handleInput}
/>
<br/>
<TextInput name={properties[2]}
value={this.state[properties[2]]}
inputType={types[2]}
label={inputs[2]}
change={this.handleInput}
/> */}