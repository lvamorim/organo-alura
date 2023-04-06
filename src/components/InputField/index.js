const InputField = ({label, type, placeholder, required, value, newValue, ariaLabel}) => {

  const inputValue = (event) => {
    newValue(event.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      
      <input 
        type={type} 
        placeholder={placeholder} 
        required={required} 
        value={value} 
        onChange={inputValue} 
        aria-labelledby={ariaLabel} 
        aria-required={required}
      />
    </div>
  );
}

export default InputField;