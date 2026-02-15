import style from "./styles.module.scss";
import AtomsIconSvg from "../IconSvg";
import Input from "../Input/Index";
import Button from "../Button";
import { Toaster } from "react-hot-toast";
import { ModalTypes } from "./Modal.types";

const Modal = ({
  icon = "register_login",
  iconWidth = "64px",
  iconHeight = "64px",
  inputs,
  buttonLabel,
  buttonVariant = "rounded",
  buttonSize = "large",
  colorPrimary = "#ff3d7f",
  colorSecondary = "#ff1a6e",
  onSubmit,
  onClose,
}: ModalTypes) => {
  return (
    <aside className={style.backdrop}>
      <Toaster />
      <div className={style.modal}>
        <form className={style.modal__form}>
          <div className={style.modal__form__border}>
            <AtomsIconSvg
              name={icon}
              width={iconWidth}
              height={iconHeight}
              className={style.modal__form__border__icon}
            />
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className={style.modal__form__closeButton}
              >
                ✕
              </button>
            )}
          </div>

          {inputs.map((input, index) => (
            <Input
              key={index}
              label={input.label}
              type={input.type}
              value={input.value}
              onInput={input.onChange}
            />
          ))}

          <Button
            variant={buttonVariant}
            size={buttonSize}
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            onClick={onSubmit}
          >
            {buttonLabel}
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default Modal;
