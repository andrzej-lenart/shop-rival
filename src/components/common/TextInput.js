import React, { PropTypes } from 'react';

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string.isRequired
};

const defaultProps = {
    defaultProps
};

const InputText = ({ name, label, value, onChange, placeholder, error }) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input type="text" 
                       name={name}
                       className="form-control"
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange} />
                       {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

InputText.propTypes = propTypes;

InputText.defaultProps = defaultProps;

export default InputText;
