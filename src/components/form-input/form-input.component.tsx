import React, {ChangeEvent} from 'react';

import './form-input.styles.scss';

interface FormInputProps {
    handleChange: any,
    label: string,
    value: string,
    type: string,
    name: string,
    required: boolean
}

const FormInput = ({ handleChange, label, ...otherProps}: FormInputProps) => (
    <div className="group">
        <input type={otherProps.type} onChange={handleChange} {...otherProps} className="form-input"/>
        {
            label ? (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >{label}</label>
            ) : null
        }
    </div>
);
export  default FormInput;
