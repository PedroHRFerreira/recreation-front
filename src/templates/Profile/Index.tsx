import { useState, ChangeEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { uploadUserAvatar } from "@/services/userService";
import { getAddressByCep } from "@/stores/addressStore";
import AtomsText from "@/components/Text/Index";
import AtomsButton from "@/components/Button/index";
import MoleculesInput from "@/components/Input/Index";
import AtomsIconSvg from "@/components/IconSvg/index";
import toast from "react-hot-toast";
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
    fotoPerfil: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(
    perfil.fotoPerfil || null,
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateField = (field: keyof typeof perfil, value: string) => {
    setPerfil((prev) => ({ ...prev, [field]: value }));
  };

  const handleZipCodeBlur = async () => {
    if (perfil.cep.length < 8) return;
    const data = await getAddressByCep(perfil.cep);
    if (data) {
      setPerfil((prev) => ({
        ...prev,
        logradouro: data.logradouro,
        localidade: data.localidade,
        uf: data.uf,
      }));
      toast.success("Endereço encontrado!");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      let finalImageUrl = perfil.fotoPerfil;

      if (selectedFile) {
        const uploadData = await uploadUserAvatar(selectedFile);
        finalImageUrl = uploadData.url;
        setSelectedFile(null);
      }

      const payload = { ...perfil, fotoPerfil: finalImageUrl };
      setPerfil(payload);
      setImagePreview(finalImageUrl);

      console.log("Payload Final:", payload);
      toast.success("Perfil atualizado com sucesso!");
    } catch (error: any) {
      toast.error(error.message || "Erro ao salvar.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Máximo 2MB");
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <section className={styles["profile"]}>
      <header className={styles["profile__header"]}>
        <div className={styles["profile__header_info"]}>
          <div className={styles["profile__title_container"]}>
            <AtomsButton variant="icon" onClick={() => router.push("/")}>
              <AtomsIconSvg name="arrow-left" width="24px" height="24px" />
            </AtomsButton>
            <AtomsText fontSize="32px" fontWeight="bold">
              Meu Perfil
            </AtomsText>
          </div>
          <AtomsText fontSize="16px">
            Gerencie suas informações e segurança
          </AtomsText>
        </div>
      </header>

      <form className={styles["profile__form"]} onSubmit={handleSave}>
        <div className={styles["profile__card"]}>
          <header className={styles["profile__card-title"]}>
            <AtomsText fontSize="18px" fontWeight="bold">
              Dados Pessoais
            </AtomsText>
          </header>

          <div className={styles["profile__grid_profile"]}>
            <div className={styles["profile__avatar-section"]}>
              <div className={styles["profile__avatar-wrapper"]}>
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Perfil"
                    className={styles["profile__avatar-img"]}
                  />
                ) : (
                  <div className={styles["profile__avatar-placeholder"]}>
                    {perfil.nome.charAt(0)}
                  </div>
                )}
                {isUploading && (
                  <div className={styles["profile__avatar-loading"]} />
                )}
              </div>

              <div className={styles["profile__avatar-info"]}>
                <AtomsButton
                  variant="secondary"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? "Enviando..." : "Alterar Foto"}
                </AtomsButton>
                <AtomsText fontSize="12px" color="gray">
                  JPG ou PNG. Máximo de 2MB.
                </AtomsText>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Nome Completo</AtomsText>
              <MoleculesInput
                value={perfil.nome}
                onInput={(v) => updateField("nome", v)}
                placeholder="Ex: João Silva"
              />
            </div>

            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Profissão</AtomsText>
              <MoleculesInput
                value={perfil.profissao}
                onInput={(v) => updateField("profissao", v)}
                placeholder="Ex: Desenvolvedor"
              />
            </div>

            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Telefone</AtomsText>
              <MoleculesInput
                value={perfil.telefone}
                onInput={(v) => updateField("telefone", v)}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Data de Nascimento</AtomsText>
              <MoleculesInput
                type="date"
                value={perfil.dataNascimento}
                onInput={(v) => updateField("dataNascimento", v)}
              />
            </div>

            <div
              className={`${styles["profile__field"]} ${styles["profile__field--full"]}`}
            >
              <AtomsText fontSize="14px">Bio</AtomsText>
              <MoleculesInput
                value={perfil.bio}
                onInput={(v) => updateField("bio", v)}
                placeholder="Conte um pouco sobre você..."
              />
            </div>
          </div>
        </div>

        <div className={styles["profile__card"]}>
          <header className={styles["profile__card-title"]}>
            <AtomsText fontSize="18px" fontWeight="bold">
              Endereço
            </AtomsText>
          </header>

          <div className={styles["profile__grid_profile"]}>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">CEP</AtomsText>
              <MoleculesInput
                value={perfil.cep}
                onInput={(v) => updateField("cep", v)}
                onBlur={handleZipCodeBlur}
                placeholder="00000-000"
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Logradouro</AtomsText>
              <MoleculesInput
                value={perfil.logradouro}
                onInput={(v) => updateField("logradouro", v)}
                placeholder="Rua, Avenida..."
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Cidade/Localidade</AtomsText>
              <MoleculesInput
                value={perfil.localidade}
                onInput={(v) => updateField("localidade", v)}
                placeholder="Sua cidade"
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">UF</AtomsText>
              <MoleculesInput
                value={perfil.uf}
                onInput={(v) => updateField("uf", v)}
                placeholder="Estado"
              />
            </div>
          </div>
        </div>

        <div className={styles["profile__card"]}>
          <header className={styles["profile__card-title"]}>
            <AtomsText fontSize="18px" fontWeight="bold">
              Segurança
            </AtomsText>
          </header>

          <div className={styles["profile__grid_profile"]}>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Senha Atual</AtomsText>
              <MoleculesInput
                type="password"
                value={perfil.senhaAtual}
                onInput={(v) => updateField("senhaAtual", v)}
                placeholder="••••••••"
              />
            </div>
            <div className={styles["profile__field"]}>
              <AtomsText fontSize="14px">Nova Senha</AtomsText>
              <MoleculesInput
                type="password"
                value={perfil.novaSenha}
                onInput={(v) => updateField("novaSenha", v)}
                placeholder="No mínimo 6 caracteres"
              />
            </div>
          </div>
        </div>

        <div className={styles["profile__footer"]}>
          <AtomsButton
            type="submit"
            disabled={isUploading}
            className={styles["profile__save-button"]}
          >
            {isUploading ? "Salvando..." : "Salvar Alterações"}
          </AtomsButton>
        </div>
      </form>
    </section>
  );
};

export default TemplatesProfile;
