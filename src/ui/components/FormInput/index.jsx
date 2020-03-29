import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FormInput = ({
  id,
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  const isInvalid = touched && !!error;
  const isValid = touched && !error;

  const inputClass = cn({
    'form-control': true,
    'is-invalid': isInvalid,
    'is-valid': isValid,
  });

  return (
    <label className="d-block" htmlFor={id}>
      <div className="mb-1">{label}</div>

      <input
        id={id}
        type={type}
        name={name}
        className={inputClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {isInvalid && (<div className="invalid-feedback">{error}</div>)}
    </label>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

FormInput.defaultProps = {
  placeholder: '',
  error: '',
};

export default FormInput;
