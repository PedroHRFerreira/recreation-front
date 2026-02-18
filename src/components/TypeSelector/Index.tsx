import styles from "./styles.module.scss";
import AtomsText from "@/components/Text/Index";
import AtomsIconSvg from "@/components/IconSvg";
import type { TypeSelectorTypes } from "./TypeSelector.types";

const TypeSelector = ({ onSelect }: TypeSelectorTypes) => {
  return (
    <div className={styles["type-selector"]}>
      <div
        className={styles["type-selector__card"]}
        onClick={() => onSelect("design")}
      >
        <div className={styles["type-selector__card__icon"]}>
          <AtomsIconSvg name="design" width="40px" height="40px" />
        </div>
        <AtomsText fontSize="18px" fontWeight="bold" color="#fff">
          Design
        </AtomsText>
        <AtomsText
          fontSize="13px"
          fontWeight="normal"
          color="rgba(255,255,255,0.5)"
        >
          Gere um design visual completo para o seu projeto
        </AtomsText>
      </div>

      <div
        className={styles["type-selector__card"]}
        onClick={() => onSelect("landing-page")}
      >
        <div className={styles["type-selector__card__icon"]}>
          <AtomsIconSvg name="landing" width="40px" height="40px" />
        </div>
        <AtomsText fontSize="18px" fontWeight="bold" color="#fff">
          Landing Page
        </AtomsText>
        <AtomsText
          fontSize="13px"
          fontWeight="normal"
          color="rgba(255,255,255,0.5)"
        >
          Crie uma landing page funcional e responsiva
        </AtomsText>
      </div>
    </div>
  );
};

export default TypeSelector;
