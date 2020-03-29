import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FormCheckbox = ({
  id,
  label,
  name,
  checked,
  onChange,
  onBlur,
  touched,
  error,
  disabled,
}) => {
  const isInvalid = touched && !!error;

  const inputClass = cn({
    'form-check-input': true,
    'is-invalid': isInvalid,
  });

  return (
    <div className="form-check">
      <input
        id={id}
        type="checkbox"
        name={name}
        className={inputClass}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />

      <label className="form-check-label d-block" htmlFor={id}>
        <div className="mb-1">{label}</div>

        {isInvalid && (<div className="invalid-feedback">{error}</div>)}
      </label>
    </div>
  );
};

FormCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

FormCheckbox.defaultProps = {
  error: '',
};

export default FormCheckbox;
