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
    router.push("/");
  };

  return (
    <section className={styles["edit"]}>
      <div className={styles["edit__header"]}>
        <button className={styles["edit__back"]} onClick={() => router.back()}>
          <AtomsIconSvg name="arrow-left" width="20px" height="20px" />
          <AtomsText fontSize="14px" color="rgba(255,255,255,0.6)">
            Voltar
          </AtomsText>
        </button>

        <AtomsText fontSize="28px" fontWeight="bold" color="#fff">
          Editar Projeto
        </AtomsText>
        <AtomsText fontSize="14px" color="rgba(255,255,255,0.6)">
          Código do projeto: {projectId}
        </AtomsText>
      </div>

      <CreateForm
        isEdit={true}
        initialData={initialData}
        onGenerate={handleUpdate}
        generationType="landing-page"
      />
    </section>
  );
};

export default TemplatesEdit;
