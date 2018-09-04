import * as React from 'react';
import classnames from 'classnames';

interface ISelectFieldGroupProps {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  options: string[];
  info?: string;
  error?: string;
  onChange: (event: any) => void;
  disabled?: boolean;
}

const SelectFieldGroup = (props: ISelectFieldGroupProps) => {
  const { label, value, error, placeholder, name, options, onChange, info } = props;
  return (
    <div>
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <select
          className={classnames('form-control', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <small className="invalid-feedback">{error}</small>}
      </div>
    </div>
  );
};

export default SelectFieldGroup;
