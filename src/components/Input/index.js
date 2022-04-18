import './Input.scss';
export default function FormInput({
  handleChange,
  value,
  name,
  error,
  touched,
}) {
  return (
    <div className="form-group">
      <label className="form-label">{name}</label>
      <input
        className="form-control"
        type={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder="Type your response here"
      />
      {error && touched && <span className="form-error">{error}</span>}
    </div>
  );
}
