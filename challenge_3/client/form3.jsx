import TextInput from './textinput.js';

class Form3 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      cardNumber: '',
      expire: '',
      cvv: '',
      ccZip: '',
      formNum: 'form3'
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
    this.setState(newState);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.completePurchase(this.state);
  }

  render () {
    let label = ['Credit Cart Number: ', 'Expiration Date: ', 'CVV: ', 'Zip Code: '];
    let properties = ['cardNumber', 'expire', 'cvv', 'ccZip'];
    let types = ['number', 'text', 'number', 'number'];
    return (

      <form onSubmit={this.handleSubmit}>
      <h1>Form 3</h1>
      {label.map((input, index) =>
        <TextInput name={properties[index]}
        value={this.state[properties[index]]}
        inputType={types[index]}
        label={label[index]}
        change={this.handleInput}
        key={index}
        />
        )}
        <button>Purchase</button>
      </form>
    )
  }

}

export default Form3;