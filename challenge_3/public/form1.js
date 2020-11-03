class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass: ''
    };
    this.handleInput = this.handleInput.bind(this); // this.handleInputName  = this.handleInputName.bind(this);
    // this.handleInputEmail  = this.handleInputEmail.bind(this);
    // this.handleInputPass = this.handleInputPass.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const property = target.name;
    let newState = Object.assign({}, this.state);
    newState[property] = value;
    console.log(newState);
    this.setState(newState);
  } // handleInputName (event) {
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


  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h1", null, "Form 1"), /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      value: this.state.name,
      onChange: this.handleInput
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "email",
      value: this.state.email,
      onChange: this.handleInput
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "pass",
      value: this.state.pass,
      onChange: this.handleInput
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.firstNext
    }, "Next"));
  }

}

export default Form1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMS5qc3giXSwibmFtZXMiOlsiRm9ybTEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3MiLCJoYW5kbGVJbnB1dCIsImJpbmQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJvcGVydHkiLCJuZXdTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInJlbmRlciIsImZpcnN0TmV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBTixTQUFvQkMsS0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUNsQ0MsRUFBQUEsV0FBVyxDQUFFQyxLQUFGLEVBQVM7QUFDbEIsVUFBT0EsS0FBUDtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsRUFESztBQUVYQyxNQUFBQSxLQUFLLEVBQUUsRUFGSTtBQUdYQyxNQUFBQSxJQUFJLEVBQUU7QUFISyxLQUFiO0FBS0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFuQixDQVBrQixDQVFsQjtBQUNBO0FBQ0E7QUFDRDs7QUFFREQsRUFBQUEsV0FBVyxDQUFFRSxLQUFGLEVBQVM7QUFDbEIsVUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQXJCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNOLElBQXhCO0FBQ0EsUUFBSVMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtaLEtBQXZCLENBQWY7QUFDQVUsSUFBQUEsUUFBUSxDQUFDRCxRQUFELENBQVIsR0FBcUJELEtBQXJCO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0EsU0FBS0ssUUFBTCxDQUFjTCxRQUFkO0FBQ0QsR0F0QmlDLENBd0JsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBTSxFQUFBQSxNQUFNLEdBQUk7QUFDUix3QkFFUSwrQ0FDQSx5Q0FEQSxlQUVFLHlEQUVBO0FBQ0UsTUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxNQUFBLEtBQUssRUFBRSxLQUFLaEIsS0FBTCxDQUFXQyxJQUhwQjtBQUlFLE1BQUEsUUFBUSxFQUFFLEtBQUtHO0FBSmpCLE1BRkEsQ0FGRixlQVVFLCtCQVZGLGVBV0UsMERBRUE7QUFDRSxNQUFBLElBQUksRUFBQyxNQURQO0FBRUUsTUFBQSxJQUFJLEVBQUMsT0FGUDtBQUdFLE1BQUEsS0FBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0UsS0FIcEI7QUFJRSxNQUFBLFFBQVEsRUFBRSxLQUFLRTtBQUpqQixNQUZBLENBWEYsZUFtQkUsK0JBbkJGLGVBb0JFLDZEQUVBO0FBQ0UsTUFBQSxJQUFJLEVBQUMsVUFEUDtBQUVFLE1BQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxNQUFBLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVdHLElBSHBCO0FBSUUsTUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFKakIsTUFGQSxDQXBCRixlQTRCRSwrQkE1QkYsZUE2QkU7QUFBUSxNQUFBLE9BQU8sRUFBRSxLQUFLTCxLQUFMLENBQVdrQjtBQUE1QixjQTdCRixDQUZSO0FBa0NEOztBQW5GaUM7O0FBc0ZwQyxlQUFldEIsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm0xIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlSW5wdXROYW1lICA9IHRoaXMuaGFuZGxlSW5wdXROYW1lLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVJbnB1dEVtYWlsICA9IHRoaXMuaGFuZGxlSW5wdXRFbWFpbC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlSW5wdXRQYXNzID0gdGhpcy5oYW5kbGVJbnB1dFBhc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0IChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRhcmdldC5uYW1lO1xuICAgIGxldCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuICAgIG5ld1N0YXRlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIC8vIGhhbmRsZUlucHV0TmFtZSAoZXZlbnQpIHtcbiAgLy8gICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIC8vICAgY29uc3QgbmFtZSA9IHRhcmdldC52YWx1ZTtcbiAgLy8gICBsZXQgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcbiAgLy8gICBuZXdTdGF0ZS5uYW1lID0gbmFtZTtcbiAgLy8gICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZUlucHV0RW1haWwgKGV2ZW50KSB7XG4gIC8vICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAvLyAgIGNvbnN0IGVtYWlsID0gdGFyZ2V0LnZhbHVlO1xuICAvLyAgIGxldCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuICAvLyAgIG5ld1N0YXRlLmVtYWlsID0gZW1haWw7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIC8vIH1cblxuICAvLyBoYW5kbGVJbnB1dFBhc3MgKGV2ZW50KSB7XG4gIC8vICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAvLyAgIGNvbnN0IHBhc3MgPSB0YXJnZXQudmFsdWU7XG4gIC8vICAgbGV0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG4gIC8vICAgbmV3U3RhdGUucGFzcyA9IHBhc3M7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIC8vIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGgxPkZvcm0gMTwvaDE+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3MnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmZpcnN0TmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtMTsiXX0=