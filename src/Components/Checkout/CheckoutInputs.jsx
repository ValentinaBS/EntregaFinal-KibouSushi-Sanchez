import { useState } from "react";

export default function CheckoutInputs(props) {
    const { label, errorMessage, onChange, onBlur, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className="checkout__input">
            <label htmlFor={`${label}`}>
                {label}<span className="checkout__required">*</span>
            </label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => 
                    inputProps.name==='repeat email' && setFocused(true)
                }
                focused={focused.toString()}
                className="input__style"
            />
            <span className="checkout__validation">
                {errorMessage}
            </span>
        </div>
    );
}
