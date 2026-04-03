import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAddressByCep } from "@/stores/addressStore";
import AtomsText from "@/components/Text/Index";
import AtomsButton from "@/components/Button/index";
import MoleculesInput from "@/components/Input/Index";
import AtomsIconSvg from "@/components/IconSvg/index";
import styles from "./styles.module.scss";

const TemplatesProfile = () => {
  const router = useRouter();
  const [perfil, setPerfil] = useState({
    nome: "Joao Pedro",
    email: "joao@exemplo.com",
    profissao: "Desenvolvedor",
    bio: "",
    telefone: "",
    dataNascimento: "",
    cep: "",
    logradouro: "",
    numero: "",
    localidade: "",
    uf: "",
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: "",
  });

  const updateField = (field: keyof typeof perfil, value: string) => {
    setPerfil((prev) => ({ ...prev, [field]: value }));
  };

  const handleZipCodeBlur = async () => {
    const data = await getAddressByCep(perfil.cep);
    if (data) {
      setPerfil((prev) => ({
        ...prev,
        logradouro: data.logradouro,
        localidade: data.localidade,
        uf: data.uf,
      }));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados salvos:", perfil);
  };

  return (
    <section className={styles["profile"]}>
      <header className={styles["profile__header"]}>
        <div className={styles["profile__header_info"]}>
          <div className={styles["profile__title_container"]}>
            <AtomsButton
              variant="icon"
              className={styles["profile__back_button"]}
              onClick={() => router.push("/")}
            >
              <AtomsIconSvg name="arrow-left" width="24px" height="24px" />
            </AtomsButton>

            <AtomsText
              fontSize="32px"
              fontWeight="bold"
              color="var(--color-primary)"
            >
              Meu Perfil
            </AtomsText>
          </div>
          <AtomsText fontSize="16px" color="var(--text-tertiary)">
            Gerencie suas informações da conta e segurança
          </AtomsText>
        </div>
      </header>

      <form className={styles["profile__form"]} onSubmit={handleSave}>
        <div className={styles["profile__card"]}>
          <div className={styles["profile__grid_profile"]}>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Nome Completo
              </AtomsText>
              <MoleculesInput
                value={perfil.nome}
                variant="secondary"
                onInput={(v) => updateField("nome", v)}
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Profissão
              </AtomsText>
              <MoleculesInput
                value={perfil.profissao}
                variant="secondary"
                onInput={(v) => updateField("profissao", v)}
              />
            </div>
            <div
              className={`${styles["profile__field"]} ${styles["profile__field--full"]}`}
            >
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Bio
              </AtomsText>
              <MoleculesInput
                value={perfil.bio}
                placeholder="Conte um pouco sobre você..."
                variant="secondary"
                onInput={(v) => updateField("bio", v)}
              />
            </div>
          </div>
        </div>

        <div className={styles["profile__card"]}>
          <div className={styles["profile__section_header"]}>
            <AtomsIconSvg name="search" width="18px" height="18px" />
            <AtomsText fontSize="18px" fontWeight="bold">
              Contato e Dados
            </AtomsText>
          </div>
          <div className={styles["profile__grid"]}>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Telefone
              </AtomsText>
              <MoleculesInput
                value={perfil.telefone}
                variant="secondary"
                onInput={(v) => updateField("telefone", v)}
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                E-mail
              </AtomsText>
              <MoleculesInput
                value={perfil.email}
                variant="secondary"
                disabled
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Data de Nascimento
              </AtomsText>
              <MoleculesInput
                type="date"
                value={perfil.dataNascimento}
                variant="secondary"
                onInput={(v) => updateField("dataNascimento", v)}
              />
            </div>
          </div>
        </div>

        <div className={styles["profile__card"]}>
          <div className={styles["profile__section_header"]}>
            <AtomsIconSvg name="landing" width="20px" height="20px" />
            <AtomsText fontSize="18px" fontWeight="bold">
              Endereço
            </AtomsText>
          </div>
          <div className={styles["profile__grid_address"]}>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                CEP
              </AtomsText>
              <MoleculesInput
                value={perfil.cep}
                variant="secondary"
                onBlur={handleZipCodeBlur}
                onInput={(v) => updateField("cep", v)}
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                N°
              </AtomsText>
              <MoleculesInput
                value={perfil.numero}
                variant="secondary"
                onInput={(v) => updateField("numero", v)}
              />
            </div>
            <div
              className={`${styles["profile__field"]} ${styles["profile__field--full"]}`}
            >
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Rua/Logradouro
              </AtomsText>
              <MoleculesInput
                value={perfil.logradouro}
                variant="secondary"
                onInput={(v) => updateField("logradouro", v)}
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Cidade
              </AtomsText>
              <MoleculesInput
                value={perfil.localidade}
                variant="secondary"
                disabled
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                UF
              </AtomsText>
              <MoleculesInput value={perfil.uf} variant="secondary" disabled />
            </div>
          </div>
        </div>

        <div className={styles["profile__card"]}>
          <div className={styles["profile__section_header"]}>
            <AtomsIconSvg name="eye" width="20px" height="20px" />
            <AtomsText fontSize="18px" fontWeight="bold">
              Segurança
            </AtomsText>
          </div>
          <div className={styles["profile__grid"]}>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Senha Atual
              </AtomsText>
              <MoleculesInput
                type="password"
                variant="secondary"
                onInput={(v) => updateField("senhaAtual", v)}
              />
            </div>
            <div className={styles["profile__grid_two"]}>
              <div className={styles["profile__field"]}>
                <AtomsText fontSize="14px" color="var(--text-tertiary)">
                  Nova Senha
                </AtomsText>
                <MoleculesInput
                  type="password"
                  variant="secondary"
                  onInput={(v) => updateField("novaSenha", v)}
                />
              </div>
              <div className={styles["profile__field"]}>
                <AtomsText fontSize="14px" color="var(--text-tertiary)">
                  Confirmar Senha
                </AtomsText>
                <MoleculesInput
                  type="password"
                  variant="secondary"
                  onInput={(v) => updateField("confirmarSenha", v)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles["profile__footer"]}>
          <AtomsButton type="submit" variant="primary">
            Salvar Alterações
          </AtomsButton>
        </div>
      </form>
    </section>
  );
};

export default TemplatesProfile;
