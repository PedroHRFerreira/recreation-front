import styles from "./styles.module.scss";
import AtomsText from "@/components/Text/Index";
import type { ChipSelectTypes } from "./ChipSelect.types";

const ChipSelect = ({
  label,
  options,
  selected,
  multiple = false,
  onSelect,
}: ChipSelectTypes) => {
  const isSelected = (value: string) => {
    if (multiple && Array.isArray(selected)) {
      return selected.includes(value);
    }
    return selected === value;
  };

  return (
    <div className={styles["chip-select"]}>
      <AtomsText fontSize="14px" fontWeight="bold" color="rgba(255,61,127,0.8)">
        {label}
      </AtomsText>
      <div className={styles["chip-select__chips"]}>
        {options.map((option) => (
          <button
            key={option.value}
            className={`${styles["chip-select__chip"]} ${
              isSelected(option.value)
                ? styles["chip-select__chip--active"]
                : ""
            }`}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChipSelect;
