import { ForwardedRef, forwardRef } from "react";
import { SelectProps } from "./types";
import "./index.css";

const Select: React.FC<SelectProps> = forwardRef(
  (props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { options, label, name, ...rest } = props;

    return (
      <div className="selectWrapper">
        <label htmlFor={name}>{label}</label>
        <div className="selectContainer">
          <select ref={ref} {...rest}>
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

export default Select;
