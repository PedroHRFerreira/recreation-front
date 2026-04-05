import styles from "./styles.module.scss";
import type { KeyboardEvent } from "react";
import { useRouter } from "next/router";
import AtomsIconSvg from "../IconSvg";
import Input from "../Input/Index";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearch } from "@/store/slices/uiSlice";

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.ui.search);
  const user = useAppSelector((state) => state.auth.user);

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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className={styles["header"]}>
      <section className={styles["header__search"]}>
        <Input
          type="text"
          placeholder="Procurar"
          value={search}
          onInput={(value) => dispatch(setSearch(value))}
          onKeyDown={handleKeyDown}
        />
        <Button variant="icon" onClick={handleSearch}>
          <AtomsIconSvg name="search" width="20px" height="20px" />
        </Button>
      </section>
      <section className={styles["header__actions"]}>
        <Button variant="circle" onClick={handleProfile}>
          <span className={styles["header__actions__avatar"]}>
            {user?.name?.charAt(0).toUpperCase() ?? "P"}
          </span>
        </Button>
      </section>
    </header>
  );
};

export default Header;
