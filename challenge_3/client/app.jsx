// import React from './react.development.js';
// import ReactDOM from './react-dom.development.js';
import Form1 from './form1.js'
import Form2 from './form2.js'
import Form3 from './form3.js'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        page: 0,
        form1: {},
        form2: {},
        form3: {}
      }
      this.createClick = this.createClick.bind(this);
      this.handleNext = this.handleNext.bind(this);
      this.completePurchase = this.completePurchase.bind(this);
  }

  createClick () {
    this.setState((state) => ({
      page: 1
    }));
  }

  handleNext (form) {
    let newState = Object.assign({}, this.state);
    newState[form.formNum] = form;
    newState.page++;
    console.log(newState);
    this.setState(newState);
  }

  completePurchase (form) {
    let newState = Object.assign({}, this.state);
    newState[form.formNum] = form;
    newState.page = 0;
    console.log(newState);
    this.setState(newState);
  }

  render () {
    let page;
    if (this.state.page === 0) {
      page = (<div>
              <h1>Home Page</h1>
              <button onClick={this.createClick}>Create Checkout</button>
              </div>)
    } else if (this.state.page === 1) {
      page = <Form1 handleNext={this.handleNext}/>
    } else if (this.state.page === 2) {
      page = <Form2 handleNext={this.handleNext}/>
    } else if (this.state.page === 3) {
      page = <Form3 completePurchase={this.completePurchase}/>
    }
    return (<div>
            {page}
          </div>)
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));