import { useState } from "react";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { fetchAddressByCep } from "@/stores/address/useAddress";
import AtomsText from "@/components/Text/Index";
import AtomsButton from "@/components/Button/index";
import MoleculesInput from "@/components/Input/Index";
import AtomsIconSvg from "@/components/IconSvg/index";
import { validationEmail } from "@/hooks/useValidate";
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

  const updateNumberField = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    updateField("numero", numericValue);
  };

  const validateProfile = () => {
    if (!perfil.nome.trim()) {
      toast.error("Nome completo é obrigatório.");
      return false;
    }

    if (!perfil.email.trim()) {
      toast.error("Email é obrigatório.");
      return false;
    }

    if (!validationEmail(perfil.email)) {
      toast.error("Email inválido.");
      return false;
    }

    if (!perfil.profissao.trim()) {
      toast.error("Profissão é obrigatória.");
      return false;
    }

    if (!perfil.bio.trim()) {
      toast.error("Bio é obrigatória.");
      return false;
    }

    if (!perfil.telefone.trim()) {
      toast.error("Telefone é obrigatório.");
      return false;
    }

    if (!/^\d{10,11}$/.test(perfil.telefone.replace(/\D/g, ""))) {
      toast.error("Telefone inválido.");
      return false;
    }

    if (!perfil.dataNascimento) {
      toast.error("Data de nascimento é obrigatória.");
      return false;
    }

    if (!perfil.cep.trim()) {
      toast.error("CEP é obrigatório.");
      return false;
    }

    if (!/^\d{8}$/.test(perfil.cep.replace(/\D/g, ""))) {
      toast.error("CEP inválido.");
      return false;
    }

    if (!perfil.numero.trim()) {
      toast.error("Número é obrigatório.");
      return false;
    }

    if (!/^\d+$/.test(perfil.numero)) {
      toast.error("O número do endereço deve conter apenas dígitos.");
      return false;
    }

    if (!perfil.logradouro.trim()) {
      toast.error("Logradouro é obrigatório.");
      return false;
    }

    if (!perfil.localidade.trim()) {
      toast.error("Cidade é obrigatória.");
      return false;
    }

    if (!perfil.uf.trim()) {
      toast.error("UF é obrigatória.");
      return false;
    }

    if (!perfil.senhaAtual.trim()) {
      toast.error("Senha atual é obrigatória.");
      return false;
    }

    if (!perfil.novaSenha.trim()) {
      toast.error("Nova senha é obrigatória.");
      return false;
    }

    if (perfil.novaSenha.length < 6) {
      toast.error("A nova senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    if (!perfil.confirmarSenha.trim()) {
      toast.error("Confirmação de senha é obrigatória.");
      return false;
    }

    if (perfil.novaSenha !== perfil.confirmarSenha) {
      toast.error("A confirmação de senha não confere.");
      return false;
    }

    return true;
  };

  const handleZipCodeBlur = async () => {
    try {
      const data = await fetchAddressByCep(perfil.cep);

      if (!data) {
        setPerfil((prev) => ({
          ...prev,
          logradouro: "",
          localidade: "",
          uf: "",
        }));
        if (perfil.cep.trim()) {
          toast.error("CEP não encontrado.");
        }
        return;
      }

      setPerfil((prev) => ({
        ...prev,
        logradouro: data.logradouro,
        localidade: data.localidade,
        uf: data.uf,
      }));
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateProfile()) {
      return;
    }

    console.log("Dados salvos:", perfil);
    toast.success("Perfil salvo com sucesso.");
  };

  return (
    <section className={styles.profile}>
      <Toaster />
      <header className={styles.profile__header}>
        <div className={styles.profile__header_info}>
          <div className={styles.profile__title_container}>
            <button
              type="button"
              className={styles.profile__back_button}
              onClick={() => router.push("/")}
            >
              <AtomsIconSvg name="arrow-left" width="24px" height="24px" />
            </button>

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

      <form className={styles.profile__form} onSubmit={handleSave}>
        <div className={styles.profile__card}>
          <div className={styles.profile__grid_profile}>
            <div className={styles.profile__field}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Nome Completo
              </AtomsText>
              <MoleculesInput
                value={perfil.nome}
                variant="secondary"
                onInput={(v) => updateField("nome", v)}
              />
            </div>
            <div className={styles.profile__field}>
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
              className={`${styles.profile__field} ${styles["profile__field--full"]}`}
            >
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Bio
              </AtomsText>
              <textarea
                className={styles.profile__textarea}
                value={perfil.bio}
                onChange={(e) => updateField("bio", e.target.value)}
                placeholder="Conte um pouco sobre você..."
              />
            </div>
          </div>
        </div>

        <div className={styles.profile__card}>
          <div className={styles.profile__section_header}>
            <AtomsIconSvg name="search" width="18px" height="18px" />
            <AtomsText fontSize="18px" fontWeight="bold">
              Contato e Dados
            </AtomsText>
          </div>
          <div className={styles.profile__grid}>
            <div className={styles.profile__field}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Telefone
              </AtomsText>
              <MoleculesInput
                value={perfil.telefone}
                variant="secondary"
                onInput={(v) => updateField("telefone", v)}
              />
            </div>
            <div className={styles.profile__field}>
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

        <div className={styles.profile__card}>
          <div className={styles.profile__section_header}>
            <AtomsIconSvg name="landing" width="20px" height="20px" />
            <AtomsText fontSize="18px" fontWeight="bold">
              Endereço
            </AtomsText>
          </div>
          <div className={styles.profile__grid_address}>
            <div className={styles.profile__field}>
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
            <div className={styles.profile__field}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                N°
              </AtomsText>
              <MoleculesInput
                value={perfil.numero}
                variant="secondary"
                onInput={updateNumberField}
              />
            </div>
            <div
              className={`${styles.profile__field} ${styles["profile__field--full"]}`}
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
            <div className={styles.profile__field}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Cidade
              </AtomsText>
              <MoleculesInput
                value={perfil.localidade}
                variant="secondary"
                disabled
              />
            </div>
            <div className={styles.profile__field}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                UF
              </AtomsText>
              <MoleculesInput value={perfil.uf} variant="secondary" disabled />
            </div>
          </div>
        </div>

        <div className={styles.profile__card}>
          <div className={styles.profile__section_header}>
            <AtomsIconSvg name="eye" width="20px" height="20px" />
            <AtomsText fontSize="18px" fontWeight="bold">
              Segurança
            </AtomsText>
          </div>
          <div className={styles.profile__grid}>
            <div className={styles.profile__field}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Senha Atual
              </AtomsText>
              <MoleculesInput
                type="password"
                variant="secondary"
                onInput={(v) => updateField("senhaAtual", v)}
              />
            </div>
            <div className={styles.profile__grid_two}>
              <div className={styles.profile__field}>
                <AtomsText fontSize="14px" color="var(--text-tertiary)">
                  Nova Senha
                </AtomsText>
                <MoleculesInput
                  type="password"
                  variant="secondary"
                  onInput={(v) => updateField("novaSenha", v)}
                />
              </div>
              <div className={styles.profile__field}>
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

        <div className={styles.profile__footer}>
          <AtomsButton type="submit" variant="primary">
            Salvar Alterações
          </AtomsButton>
        </div>
      </form>
    </section>
  );
};

export default TemplatesProfile;
