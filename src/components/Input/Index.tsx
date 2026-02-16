import React, { useState, useEffect } from "react";
import type { InputTypes } from "./Input.types";
import AtomsIconSvg from "../IconSvg";
import styles from "./styles.module.scss";

const Input: React.FC<InputTypes> = ({
  label,
  type = "text",
  value = "",
  placeholder,
  onInput,
  onKeyDown,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";
  const inputType = isPasswordType && !showPassword ? "password" : "text";

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    setInputValue(val);
    if (onInput) onInput(val);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.input}>
      <div className={styles.input_container}>
        {label && (
          <label className={styles.input_container__label}>{label}</label>
        )}
        <input
          className={styles.input_container__input}
          value={inputValue}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
        {isPasswordType && (
          <button
            type="button"
            className={styles.input_container__toggle}
            onClick={togglePasswordVisibility}
            disabled={disabled}
          >
            <AtomsIconSvg
              name={showPassword ? "eye-alt" : "eye"}
              width="20px"
              height="20px"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
