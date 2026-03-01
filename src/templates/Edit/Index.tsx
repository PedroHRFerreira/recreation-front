import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import AtomsText from "@/components/Text/Index";
import AtomsIconSvg from "@/components/IconSvg";
import CreateForm from "@/components/CreateForm/Index";
import type { CreateFormData } from "../Create/Create.types";

const TemplatesEdit = ({
  projectId,
}: {
  projectId: string | string[] | undefined;
}) => {
  const router = useRouter();

  // Mock dos dados que virão da API no futuro
  const initialData: CreateFormData = {
    name: "Projeto Existente",
    businessType: "E-commerce",
    description: "Landing page de teste",
    style: "moderno",
    colorPrimary: "#2d5a27",
    colorSecondary: "#ffffff",
    sections: ["hero", "about"],
  };

  const handleUpdate = (data: CreateFormData) => {
    console.log("Atualizando projeto:", projectId, data);
    // Aqui faremos o PUT depois
  };

  const handleExport = () => {
    console.log("Id da tela de edição:", projectId);
  };

  return (
    <section className={styles.edit}>
      <div className={styles.edit__header}>
        <button className={styles.edit__back} onClick={() => router.back()}>
          <AtomsIconSvg name="arrow-left" width="20px" height="20px" />
          <AtomsText fontSize="14px" color="rgba(255,255,255,0.6)">
            Voltar
          </AtomsText>
        </button>

        <AtomsText fontSize="28px" fontWeight="bold" color="#fff">
          Editar Projeto
        </AtomsText>
        <button className={styles.edit__export} onClick={handleExport}>
          <AtomsText fontSize="14px" fontWeight={600} color="#fff">
            Exportar
          </AtomsText>
        </button>
        <AtomsText fontSize="14px" color="rgba(255,255,255,0.6)">
          ID do projeto: {projectId}
        </AtomsText>
      </div>

      <CreateForm
        generationType="landing-page"
        onGenerate={handleUpdate}
        initialData={initialData}
      />
    </section>
  );
};

export default TemplatesEdit;
