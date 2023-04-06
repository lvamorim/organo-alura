const OptionsField = ({label, required, value, newValue, items, ariaLabel}) => {

  return (
    <div>
      <label>{label}</label>
      
      <select 
        required={required} 
        value={value} 
        onChange={event => newValue(event.target.value)} 
        aria-label={ariaLabel} 
        aria-required={required}
      >
        <option value="" aria-labelledby=""></option>
        {items.map(item => <option key={item} aria-labelledby={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default OptionsField;