import { useForm } from "react-hook-form";
import { useZipCode } from "@/hooks/useZipCode";
import AtomsText from "@/components/Text/Index";
import AtomsButton from "@/components/Button/index";
import AtomsIconSvg from "@/components/IconSvg/index";
import styles from "./styles.module.scss";

const TemplatesProfile = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { handleZipCodeBlur } = useZipCode(setValue);

  const onSubmit = (data: any) => console.log("Salvo:", data);

  return (
    <section className={styles.profile}>
      <header className={styles.profile__header}>
        <div className={styles.profile__header_info}>
          <AtomsText
            fontSize="32px"
            fontWeight="bold"
            color="var(--color-primary)"
          >
            Meu Perfil
          </AtomsText>
          <AtomsText fontSize="16px" color="var(--text-tertiary)">
            Gerencie suas informações da conta e segurança de forma rápida e
            segura
          </AtomsText>
        </div>
        <div className={styles.profile__avatar}>
          <div className={styles.profile__avatar_placeholder}>
            <AtomsIconSvg name="design" width="40px" height="40px" />
          </div>
          <button type="button" className={styles.profile__avatar_button}>
            Alterar Foto
          </button>
        </div>
      </header>

      <form className={styles.profile__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.profile__card}>
          <div className={styles.profile__section_header}>
            <AtomsIconSvg name="design" width="20px" height="20px" />
            <AtomsText
              fontSize="18px"
              fontWeight={600}
              color="var(--text-primary)"
            >
              Informações Pessoais
            </AtomsText>
          </div>

          <div className={styles.profile__grid}>
            <div className={styles.profile__field}>
              <label>Nome Completo</label>
              <input {...register("name")} placeholder="Seu nome" />
            </div>
            <div className={styles.profile__field}>
              <label>Profissão</label>
              <input
                {...register("profession")}
                placeholder="Ex: Desenvolvedor"
              />
            </div>
            <div
              className={`${styles.profile__field} ${styles.profile__field_full}`}
            >
              <label>Bio</label>
              <textarea
                {...register("bio")}
                placeholder="Conte um pouco sobre você..."
                className={styles.profile__textarea}
              />
            </div>
          </div>
        </div>

        <div className={styles.profile__card}>
          <div className={styles.profile__section_header}>
            <AtomsIconSvg name="search" width="20px" height="20px" />
            <AtomsText
              fontSize="18px"
              fontWeight={600}
              color="var(--text-primary)"
            >
              Contato e Dados
            </AtomsText>
          </div>

          <div className={styles.profile__grid}>
            <div className={styles.profile__field}>
              <label>Telefone</label>
              <input {...register("phone")} placeholder="(00) 00000-0000" />
            </div>
            <div className={styles.profile__field}>
              <label>Data de Nascimento</label>
              <input {...register("birthDate")} type="date" />
            </div>
          </div>
        </div>

        <div className={styles.profile__card}>
          <div className={styles.profile__section_header}>
            <AtomsIconSvg name="landing" width="20px" height="20px" />
            <AtomsText
              fontSize="18px"
              fontWeight={600}
              color="var(--text-primary)"
            >
              Endereço
            </AtomsText>
          </div>

          <div className={styles.profile__grid}>
            <div className={styles.profile__field}>
              <label>CEP</label>
              <input
                {...register("cep")}
                placeholder="00000-000"
                onBlur={(e) => handleZipCodeBlur(e.target.value)}
              />
            </div>
            <div className={styles.profile__field}>
              <label>Cidade</label>
              <input
                {...register("localidade")}
                placeholder="Cidade"
                readOnly
              />
            </div>
            <div className={styles.profile__field}>
              <label>UF</label>
              <input {...register("uf")} placeholder="UF" readOnly />
            </div>
            <div
              className={`${styles.profile__field} ${styles.profile__field_full}`}
            >
              <label>Rua / Logradouro</label>
              <input
                {...register("logradouro")}
                placeholder="Nome da rua, número..."
              />
            </div>
          </div>
        </div>

        <div className={styles.profile__card}>
          <div className={styles.profile__section_header}>
            <AtomsIconSvg name="eye" width="20px" height="20px" />
            <AtomsText
              fontSize="18px"
              fontWeight={600}
              color="var(--text-primary)"
            >
              Segurança
            </AtomsText>
          </div>

          <div className={styles.profile__grid}>
            <div className={styles.profile__field}>
              <label>Senha Atual</label>
              <input
                {...register("currentPassword")}
                type="password"
                placeholder="********"
              />
            </div>
            <div className={styles.profile__field}>
              <label>Nova Senha</label>
              <input
                {...register("newPassword")}
                type="password"
                placeholder="********"
              />
            </div>
            <div className={styles.profile__field}>
              <label>Confirmar Nova Senha</label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="********"
              />
            </div>
          </div>
        </div>

        <div className={styles.profile__footer}>
          <AtomsButton type="submit" variant="primary" size="large">
            Salvar Alterações
          </AtomsButton>
        </div>
      </form>
    </section>
  );
};

export default TemplatesProfile;
