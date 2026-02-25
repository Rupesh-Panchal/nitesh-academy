const InputField = ({ type, placeholder, value, onChange, error }) => {
  return (
    <div className="input-group">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;