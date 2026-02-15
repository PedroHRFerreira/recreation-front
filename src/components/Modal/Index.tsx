import style from "./styles.module.scss";
import AtomsIconSvg from "../IconSvg";
import AtomsText from "../Text/Index";
import Input from "../Input/Index";
import Button from "../Button";
import { Toaster } from "react-hot-toast";
import { ModalTypes } from "./Modal.types";

const Modal = ({
  icon = "register_login",
  iconWidth = "64px",
  iconHeight = "64px",
  title,
  subtitle,
  footerText,
  onFooterClick,
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
          {title ? (
            <div className={style.modal__form__header}>
              <AtomsText
                fontSize="24px"
                fontWeight="bold"
                color="#fff"
                textAlign="center"
              >
                {title}
              </AtomsText>
              {subtitle && (
                <AtomsText
                  fontSize="14px"
                  fontWeight="normal"
                  color="rgba(255, 255, 255, 0.6)"
                  textAlign="center"
                >
                  {subtitle}
                </AtomsText>
              )}
            </div>
          ) : (
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
          )}

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

          {footerText && (
            <div className={style.modal__form__footer}>
              <button
                type="button"
                className={style.modal__form__footer__link}
                onClick={onFooterClick}
              >
                {footerText}
              </button>
            </div>
          )}
        </form>
      </div>
    </aside>
  );
};

export default Modal;
