// import React from './react.development.js';
// import ReactDOM from './react-dom.development.js';
import Form1 from './form1.js'
import Form2 from './form2.js'

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
      this.firstNext = this.firstNext.bind(this);
      this.secondNext = this.secondNext.bind(this);
      this.completePurchase = this.completePurchase.bind(this);
  }

  createClick () {
    this.setState((state) => ({
      page: 1
    }));
  }

  firstNext () {
    this.setState((state) => ({
      page: 2
    }));
  }

  secondNext () {
    this.setState((state) => ({
      page: 3
    }));
  }

  completePurchase () {
    this.setState((state) => ({
      page: 0
    }));
  }

  render () {
    let page;
    if (this.state.page === 0) {
      page = (<div>
              <h1>Home Page</h1>
              <button onClick={this.createClick}>Create Checkout</button>
              </div>)
    } else if (this.state.page === 1) {
      page = <Form1 firstNext={this.firstNext}/>
    } else if (this.state.page === 2) {
      page = <Form2 secondNext={this.secondNext}/>
    } else if (this.state.page === 3) {
      page = <Form3 completePurchase={this.completePurchase}/>
    }

    return (<div>
            {page}
          </div>)
  }
}

// const Form2 = (props) => (
//   <div>
//   <h1>Form 2</h1>
//   <button onClick={props.secondNext}>Next</button>
//   </div>
// )

const Form3 = (props) => (
  <div>
  <h1>Form 3</h1>
  <button onClick={props.completePurchase}>Purchase</button>
  </div>
)

// const App = () => (
//   <div>Hello World</div>
// )



ReactDOM.render(<App/>, document.getElementById('app'));