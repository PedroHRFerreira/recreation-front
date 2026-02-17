import styles from "./styles.module.scss";
import Image from "next/image";
import AtomsIconSvg from "../IconSvg";
import AtomsText from "../Text/Index";
import { CardTypes } from "./Card.types";

const Card = ({ image, title, description, onAdd, onClick }: CardTypes) => {
  const hasData = !!(image && title);

  if (!hasData) {
    return (
      <aside className={styles.card__empty} onClick={onAdd}>
        <AtomsIconSvg name="add" width="48px" height="48px" />
      </aside>
    );
  }

  return (
    <aside className={styles.card} onClick={onClick}>
      <div className={styles.card__image__wrap}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.card__image__wrap__image}
        />
      </div>

      <div className={styles.card__overlay}>
        <AtomsText fontSize="16px" fontWeight="bold" color="#fff">
          {title}
        </AtomsText>
        {description && (
          <AtomsText
            fontSize="13px"
            fontWeight="normal"
            color="rgba(255,255,255,0.75)"
          >
            {description}
          </AtomsText>
        )}
      </div>
    </aside>
  );
};

export default Card;
