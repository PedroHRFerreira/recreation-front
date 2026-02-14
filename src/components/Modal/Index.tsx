import style from "./styles.module.scss";
import AtomsIconSvg from "../IconSvg";

const Modal = () => {
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
        </form>
      </div>
    </aside>
  );
};

export default Modal;
