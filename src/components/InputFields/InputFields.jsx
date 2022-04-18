const Inputfield = (props) => {
  const { label, id, name, type, value, onchange, errors, touched } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={name}
        placeholder="Type your response here"
        value={value}
        onChange={onchange}
      />
      {errors && touched && <p className="error">{errors}</p>}
    </>
  );
};

export default Inputfield;
