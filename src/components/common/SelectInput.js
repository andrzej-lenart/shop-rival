import React, { PropTypes } from 'react';

const propTypes = {
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

const defaultProps = {
};

const SelectInput = ({ defaultOption, options, value, name, onChange }) => {

    return (
        <select className="form-control"
                value={value}
                onChange={onChange}
                name={name} >

            <option value={defaultOption}>{defaultOption}</option>
            {options.map(option =>
                (<option key={option.value} value={option.value}>{option.text}</option>))
            }
        </select>
    );
};

SelectInput.propTypes = propTypes;

SelectInput.defaultProps = defaultProps;

export default SelectInput;
