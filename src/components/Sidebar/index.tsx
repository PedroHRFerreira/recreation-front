import { useState } from "react";
import styles from "./styles.module.scss";
import { SidebarFilter } from "./Sidebar.types";
import AtomsText from "../Text/Index";

const sidebarTypes: SidebarFilter[] = [
  { label: "Todos", value: "todos" },
  { label: "Landing Page", value: "landing_page" },
  { label: "Design", value: "design" },
];

const Sidebar = () => {
  const [selectedType, setSelectedType] = useState("todos");
  const [status, setStatus] = useState<"ativo" | "desativo">("ativo");

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__section}>
        <AtomsText
          fontSize="11px"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight={600}
          color="rgba(255, 255, 255, 0.4)"
        >
          TIPO
        </AtomsText>
        <ul className={styles.sidebar__list}>
          {sidebarTypes.map((type) => (
            <li
              key={type.value}
              className={`${styles.sidebar__item} ${selectedType === type.value ? styles["sidebar__item--active"] : ""}`}
              onClick={() => setSelectedType(type.value)}
            >
              <AtomsText
                fontSize="14px"
                fontFamily="var(--font-inter), sans-serif"
                fontWeight={selectedType === type.value ? 500 : 400}
                color="inherit"
              >
                {type.label}
              </AtomsText>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.sidebar__section}>
        <AtomsText
          fontSize="11px"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight={600}
          color="rgba(255, 255, 255, 0.4)"
        >
          STATUS
        </AtomsText>
        <ul className={styles.sidebar__list}>
          <li
            className={`${styles.sidebar__item} ${status === "ativo" ? styles["sidebar__item--active"] : ""}`}
            onClick={() => setStatus("ativo")}
          >
            <span
              className={`${styles.sidebar__dot} ${styles["sidebar__dot--ativo"]}`}
            />
            <AtomsText
              fontSize="14px"
              fontFamily="var(--font-inter), sans-serif"
              fontWeight={status === "ativo" ? 500 : 400}
              color="inherit"
            >
              Ativo
            </AtomsText>
          </li>
          <li
            className={`${styles.sidebar__item} ${status === "desativo" ? styles["sidebar__item--active"] : ""}`}
            onClick={() => setStatus("desativo")}
          >
            <span
              className={`${styles.sidebar__dot} ${styles["sidebar__dot--desativo"]}`}
            />
            <AtomsText
              fontSize="14px"
              fontFamily="var(--font-inter), sans-serif"
              fontWeight={status === "desativo" ? 500 : 400}
              color="inherit"
            >
              Desativo
            </AtomsText>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
