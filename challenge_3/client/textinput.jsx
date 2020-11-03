const TextInput = (props) => (
  <p>
  <label>
  {props.label}
  <input
    type={props.inputType}
    name={props.name}
    value={props.value}
    onChange={props.change} />
  </label>
  </p>
)

export default TextInput;