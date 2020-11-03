import TextInput from './textinput.js';

class Form2 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      addressline1: '',
      addressline2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      formNum: 'form2'
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
    let label = ['Address Line 1: ', 'Address Line 2: ', 'City: ', 'State: ', 'Zip: ', 'Phone: '];
    let properties = ['addressline1', 'addressline2', 'city', 'state', 'zip', 'phone'];
    let types = ['text', 'text', 'text', 'text', 'text', 'text'];
    return (

            <form onSubmit={this.handleSubmit}>
            <h1>Form 2</h1>
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

export default Form2;