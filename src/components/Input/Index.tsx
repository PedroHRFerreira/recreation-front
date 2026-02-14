import React, { useState, useEffect } from "react";
import type { InputTypes } from "./Input.types";
import styles from "./styles.module.scss";

const Input: React.FC<InputTypes> = ({
  label,
  type = "text",
  value = "",
  onInput,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    setInputValue(val);
    if (onInput) onInput(val);
  };

  return (
    <div className={styles.input}>
      <div className={styles.input_container}>
        <label className={styles.input_container__label}>{label}</label>
        <input
          className={styles.input_container__input}
          value={inputValue}
          type={type}
          disabled={disabled}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
