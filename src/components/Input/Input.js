import './Input.scss';
export default function FormInput({ error, touched, ...props }) {
  return (
    <div className="form-group">
      <label className="form-label">{props.name}</label>
      <input
        className="form-control"
        type={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder="Type your response here"
      />
      {error && touched && <span className="form-error">{error}</span>}
    </div>
  );
}
