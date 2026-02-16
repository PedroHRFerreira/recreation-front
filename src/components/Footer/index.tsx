import styles from "./styles.module.scss";
import AtomsText from "../Text/Index";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AtomsText fontSize="13px" color="rgba(255, 255, 255, 0.4)">
        © 2026 Recreation. Todos os direitos reservados.
      </AtomsText>
    </footer>
  );
};

export default Footer;
