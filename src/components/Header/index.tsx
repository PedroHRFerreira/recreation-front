import styles from "./styles.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import AtomsIconSvg from "../IconSvg";
import Input from "../Input/Index";
import Button from "../Button";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter(); 

  const handleSearch = () => {
    if (!search.trim()) return;

    if (router.pathname !== "/") {
      router.push("/");
    }
    console.log("pesquisar:", search);
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className={styles.header}>
      <section className={styles.header__search}>
        <Input
          type="text"
          placeholder="Procurar"
          value={search}
          onInput={setSearch}
          onKeyDown={handleKeyDown}
        />
        <Button variant="icon" onClick={handleSearch}>
          <AtomsIconSvg name="search" width="20px" height="20px" />
        </Button>
      </section>

      <section className={styles.header__actions}>
        <Button variant="circle" onClick={handleProfile}>
          <span className={styles.header__actions__avatar}>P</span>
        </Button>
      </section>
    </header>
  );
};

export default Header;
