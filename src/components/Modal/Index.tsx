import style from "./styles.module.scss";
import AtomsIconSvg from "../IconSvg";
import Input from "../Input/Index";
import Button from "../Button";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Modal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (!email) {
      toast.error("Email é obrigatório.");
    }
    if (!password) {
      toast.error("Senha é obrigatória.");
    }

    return email && password;
  };

  const register = () => {
    if (!validate()) return;
    console.log("Registro com:", { email, password });
  };

  return (
    <aside className={style.backdrop}>
      <Toaster />
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
          <Button
            variant="rounded"
            size="large"
            colorPrimary="#ff3d7f"
            colorSecondary="#ff1a6e"
            onClick={register}
          >
            LOGIN
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default Modal;
