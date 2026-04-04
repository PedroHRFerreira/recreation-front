import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import AtomsText from "@/components/Text/Index";
import AtomsButton from "@/components/Button/index";
import MoleculesInput from "@/components/Input/Index";
import AtomsIconSvg from "@/components/IconSvg/index";
import { validationEmail } from "@/hooks/useValidate";
import { fetchAddressByCep } from "@/store/services/address";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  clearAddress,
  setAddressFromPostalCode,
  setAddressLoading,
  setProfileField,
} from "@/store/slices/profileSlice";
import styles from "./styles.module.scss";

const TemplatesProfile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile);

  const updateNumberField = (value: string) => {
    dispatch(
      setProfileField({
        field: "number",
        value: value.replace(/\D/g, ""),
      }),
    );
  };

  const validateProfile = () => {
    if (!profile.fullName.trim()) {
      toast.error("Nome completo é obrigatório.");
      return false;
    }

    if (!profile.email.trim()) {
      toast.error("Email é obrigatório.");
      return false;
    }

    if (!validationEmail(profile.email)) {
      toast.error("Email inválido.");
      return false;
    }

    if (!profile.profession.trim()) {
      toast.error("Profissão é obrigatória.");
      return false;
    }

    if (!profile.bio.trim()) {
      toast.error("Bio é obrigatória.");
      return false;
    }

    if (!profile.phone.trim()) {
      toast.error("Telefone é obrigatório.");
      return false;
    }

    if (!/^\d{10,11}$/.test(profile.phone.replace(/\D/g, ""))) {
      toast.error("Telefone inválido.");
      return false;
    }

    if (!profile.birthDate) {
      toast.error("Data de nascimento é obrigatória.");
      return false;
    }

    if (!profile.postalCode.trim()) {
      toast.error("CEP é obrigatório.");
      return false;
    }

    if (!/^\d{8}$/.test(profile.postalCode.replace(/\D/g, ""))) {
      toast.error("CEP inválido.");
      return false;
    }

    if (!profile.number.trim()) {
      toast.error("Número é obrigatório.");
      return false;
    }

    if (!/^\d+$/.test(profile.number)) {
      toast.error("O número do endereço deve conter apenas dígitos.");
      return false;
    }

    if (!profile.street.trim()) {
      toast.error("Logradouro é obrigatório.");
      return false;
    }

    if (!profile.neighborhood.trim()) {
      toast.error("Bairro é obrigatório.");
      return false;
    }

    if (!profile.city.trim()) {
      toast.error("Cidade é obrigatória.");
      return false;
    }

    if (!profile.state.trim()) {
      toast.error("UF é obrigatória.");
      return false;
    }

    if (!profile.currentPassword.trim()) {
      toast.error("Senha atual é obrigatória.");
      return false;
    }

    if (!profile.newPassword.trim()) {
      toast.error("Nova senha é obrigatória.");
      return false;
    }

    if (profile.newPassword.length < 6) {
      toast.error("A nova senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    if (!profile.confirmPassword.trim()) {
      toast.error("Confirmação de senha é obrigatória.");
      return false;
    }

    if (profile.newPassword !== profile.confirmPassword) {
      toast.error("A confirmação de senha não confere.");
      return false;
    }

    return true;
  };

  const handleZipCodeBlur = async () => {
    dispatch(setAddressLoading(true));

    try {
      const data = await fetchAddressByCep(profile.postalCode);

      if (!data) {
        dispatch(clearAddress());

        if (profile.postalCode.trim()) {
          toast.error("CEP não encontrado.");
        }

        return;
      }

      dispatch(setAddressFromPostalCode(data));
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      toast.error("Não foi possível buscar o endereço.");
    } finally {
      dispatch(setAddressLoading(false));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateProfile()) {
      return;
    }

    console.log("Dados salvos:", profile);
    toast.success("Perfil salvo com sucesso.");
  };

  return (
    <section className={styles["profile"]}>
      <Toaster />
      <header className={styles["profile__header"]}>
        <div className={styles["profile__header_info"]}>
          <div className={styles["profile__title_container"]}>
            <button
              type="button"
              className={styles["profile__back_button"]}
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

      <form className={styles["profile__form"]} onSubmit={handleSave}>
        <div className={styles["profile__card"]}>
          <div className={styles["profile__grid_profile"]}>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Nome Completo
              </AtomsText>
              <MoleculesInput
                value={profile.fullName}
                variant="secondary"
                onInput={(value) =>
                  dispatch(setProfileField({ field: "fullName", value }))
                }
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Profissão
              </AtomsText>
              <MoleculesInput
                value={profile.profession}
                variant="secondary"
                onInput={(value) =>
                  dispatch(setProfileField({ field: "profession", value }))
                }
              />
            </div>
            <div
              className={`${styles["profile__field"]} ${styles["profile__field--full"]}`}
            >
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Bio
              </AtomsText>
              <textarea
                className={styles["profile__textarea"]}
                value={profile.bio}
                onChange={(e) =>
                  dispatch(
                    setProfileField({ field: "bio", value: e.target.value }),
                  )
                }
                placeholder="Conte um pouco sobre você..."
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
                value={profile.phone}
                variant="secondary"
                onInput={(value) =>
                  dispatch(setProfileField({ field: "phone", value }))
                }
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Data de Nascimento
              </AtomsText>
              <MoleculesInput
                type="date"
                value={profile.birthDate}
                variant="secondary"
                onInput={(value) =>
                  dispatch(setProfileField({ field: "birthDate", value }))
                }
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
                value={profile.postalCode}
                variant="secondary"
                onBlur={handleZipCodeBlur}
                onInput={(value) =>
                  dispatch(setProfileField({ field: "postalCode", value }))
                }
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                N°
              </AtomsText>
              <MoleculesInput
                value={profile.number}
                variant="secondary"
                onInput={updateNumberField}
              />
            </div>
            <div
              className={`${styles["profile__field"]} ${styles["profile__field--full"]}`}
            >
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Rua/Logradouro
              </AtomsText>
              <MoleculesInput
                value={profile.street}
                variant="secondary"
                disabled={profile.isFetchingAddress}
                onInput={(value) =>
                  dispatch(setProfileField({ field: "street", value }))
                }
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Bairro
              </AtomsText>
              <MoleculesInput
                value={profile.neighborhood}
                variant="secondary"
                onInput={(value) =>
                  dispatch(setProfileField({ field: "neighborhood", value }))
                }
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                Cidade
              </AtomsText>
              <MoleculesInput
                value={profile.city}
                variant="secondary"
                disabled
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px" color="var(--text-tertiary)">
                UF
              </AtomsText>
              <MoleculesInput
                value={profile.state}
                variant="secondary"
                disabled
              />
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
                onInput={(value) =>
                  dispatch(setProfileField({ field: "currentPassword", value }))
                }
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
                  onInput={(value) =>
                    dispatch(setProfileField({ field: "newPassword", value }))
                  }
                />
              </div>
              <div className={styles["profile__field"]}>
                <AtomsText fontSize="14px" color="var(--text-tertiary)">
                  Confirmar Senha
                </AtomsText>
                <MoleculesInput
                  type="password"
                  variant="secondary"
                  onInput={(value) =>
                    dispatch(
                      setProfileField({ field: "confirmPassword", value }),
                    )
                  }
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
