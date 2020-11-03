class Form2 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      addressline1: '',
      addressline2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
    this.handleInput = this.handleInput.bind(this);
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

  render () {
    return (

            <form>
            <h1>Form 2</h1>
              <label>
              Address Line 1:
              <input
                type='text'
                name='addressline1'
                value={this.state.addressline1}
                onChange={this.handleInput} />
              </label>
              <br/>
              <label>
              Address Line 2:
              <input
                type='text'
                name='addressline2'
                value={this.state.addressline2}
                onChange={this.handleInput} />
              </label>

              <br/>
              <button onClick={this.props.secondNext}>Next</button>
            </form>
    )
  }
}

export default Form2;