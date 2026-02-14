import style from "./styles.module.scss";
import AtomsIconSvg from "../IconSvg";
import Input from "../Input/Index";
import { useState } from "react";

const Modal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <aside className={style.backdrop}>
      <div className={style.modal}>
        <form className={style.modal__form}>
          <div className={style.modal__form__border}>
            <AtomsIconSvg
              name="register_login"
              width="64px"
              height="64px"
              className={style.modal__form__border__icon}
            />
            {/* TODO: ação de cadastrar um novo login. */}
          </div>
          <Input
            label="Email"
            type="email"
            value={email}
            onInput={(event) => setEmail(event)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onInput={(event) => setPassword(event)}
          />
        </form>
      </div>
    </aside>
  );
};

export default Modal;
