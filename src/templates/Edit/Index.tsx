import { useRouter } from "next/router";
import { GenerationType } from "@/enum/create.enum";
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

  const displayId = Array.isArray(projectId) ? projectId[0] : projectId;

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

  const handleExport = () => {
    console.log("Exportando projeto:", projectId);
  };

  const handleUpdate = (data: CreateFormData) => {
    console.log("Atualizando projeto:", projectId, data);
    // Aqui faremos o PUT depois
    router.push("/");
  };

  return (
    <section className={styles.edit}>
      <div className={styles["edit__header"]}>
        <div className={styles["edit__header-top"]}>
          <button
            className={styles["edit__back"]}
            onClick={() => router.back()}
          >
            <AtomsIconSvg name="arrow-left" width="18px" height="18px" />
            <AtomsText fontSize="14px">Voltar</AtomsText>
          </button>
        </div>

        <div className={styles["edit__header-main"]}>
          <div className={styles["edit__title-group"]}>
            <AtomsText fontSize="28px" fontWeight="bold" color="#fff">
              Editar Projeto
            </AtomsText>
            <AtomsText fontSize="14px" color="var(--text-tertiary)">
              Código do projeto: {displayId ?? "Carregando..."}
            </AtomsText>
          </div>
          <button className={styles["edit__export"]} onClick={handleExport}>
            Exportar Projeto
          </button>
        </div>
      </div>

      <CreateForm
        isEdit={true}
        initialData={initialData}
        onGenerate={handleUpdate}
        generationType={GenerationType.LANDING_PAGE}
      />
    </section>
  );
};

export default TemplatesEdit;
