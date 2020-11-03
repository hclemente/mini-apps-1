class Form1 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      email: '',
      pass: ''
    }
    this.handleInput = this.handleInput.bind(this);
    // this.handleInputName  = this.handleInputName.bind(this);
    // this.handleInputEmail  = this.handleInputEmail.bind(this);
    // this.handleInputPass = this.handleInputPass.bind(this);
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

  // handleInputName (event) {
  //   const target = event.target;
  //   const name = target.value;
  //   let newState = Object.assign({}, this.state);
  //   newState.name = name;
  //   this.setState(newState);
  // }

  // handleInputEmail (event) {
  //   const target = event.target;
  //   const email = target.value;
  //   let newState = Object.assign({}, this.state);
  //   newState.email = email;
  //   this.setState(newState);
  // }

  // handleInputPass (event) {
  //   const target = event.target;
  //   const pass = target.value;
  //   let newState = Object.assign({}, this.state);
  //   newState.pass = pass;
  //   this.setState(newState);
  // }

  render () {
    return (

            <form>
            <h1>Form 1</h1>
              <label>
              Name:
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleInput} />
              </label>
              <br/>
              <label>
              Email:
              <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleInput} />
              </label>
              <br/>
              <label>
              Password:
              <input
                type='password'
                name='pass'
                value={this.state.pass}
                onChange={this.handleInput} />
              </label>
              <br/>
              <button onClick={this.props.firstNext}>Next</button>
            </form>
    )
  }
}

export default Form1;