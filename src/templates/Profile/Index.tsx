import { useForm } from "react-hook-form";
import { useZipCode } from "@/hooks/useZipCode";
import AtomsText from "@/components/Text/Index";
import styles from "./styles.module.scss";

const TemplatesProfile = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { handleZipCodeBlur } = useZipCode(setValue);

  const onSubmit = (data: any) => console.log("Salvo:", data);

  return (
    <section className={styles.profile}>
      <header className={styles.profile__header}>
        <AtomsText fontSize="32px" fontWeight="bold">
          Meu Perfil
        </AtomsText>
        <AtomsText fontSize="14px" color="var(--text-tertiary)">
          Configure seus dados
        </AtomsText>
      </header>
      <form className={styles.profile__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.profile__section}>
          <h3>Endereço</h3>
          <div className={styles.profile__group}>
            <input
              {...register("cep")}
              placeholder="CEP"
              className={styles.profile__input}
              onBlur={(e) => handleZipCodeBlur(e.target.value)}
            />
            <input
              {...register("localidade")}
              placeholder="Cidade"
              className={styles.profile__input}
              readOnly
            />
          </div>
          <div className={styles.profile__group}>
            <input
              {...register("logradouro")}
              placeholder="Rua"
              className={styles.profile__input}
            />
            <input
              {...register("uf")}
              placeholder="UF"
              className={styles.profile__input}
              readOnly
            />
          </div>
        </div>
        <button type="submit" className={styles.profile__submit}>
          Salvar
        </button>
      </form>
    </section>
  );
};

export default TemplatesProfile;
