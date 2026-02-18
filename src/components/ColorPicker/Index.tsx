import styles from "./styles.module.scss";
import AtomsText from "@/components/Text/Index";
import type { ColorPickerTypes } from "./ColorPicker.types";

const ColorPicker = ({ label, colors, onChange }: ColorPickerTypes) => {
  return (
    <div className={styles["color-picker"]}>
      <AtomsText fontSize="14px" fontWeight="bold" color="rgba(255,61,127,0.8)">
        {label}
      </AtomsText>
      <div className={styles["color-picker__colors"]}>
        {colors.map((color, index) => (
          <label key={color.label} className={styles["color-picker__color"]}>
            <span>{color.label}</span>
            <input
              type="color"
              value={color.value}
              onChange={(e) => onChange(index, e.target.value)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
