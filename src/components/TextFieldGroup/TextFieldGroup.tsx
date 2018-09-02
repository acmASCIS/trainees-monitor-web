import * as React from 'react';
import classnames from 'classnames';

interface ITextFieldGroupProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  info?: string;
  error?: boolean;
  errorMessage?: string;
  type: string;
  onChange: (event: any) => void;
  disabled?: boolean;
}

const TextFieldGroup = (props: ITextFieldGroupProps) => {
  const { label, type, error, errorMessage, placeholder, name, value, onChange, info } = props;
  return (
    <div>
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          className={classnames('form-control', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <small className="invalid-feedback">{errorMessage}</small>}
      </div>
    </div>
  );
};

export default TextFieldGroup;
