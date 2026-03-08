import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import AtomsText from "@/components/Text/Index";
import AtomsIconSvg from "@/components/IconSvg";
import TypeSelector from "@/components/TypeSelector/Index";
import CreateForm from "@/components/CreateForm/Index";
import type { GenerationType, CreateFormData } from "./Create.types";

const TemplatesCreate = () => {
  const [generationType, setGenerationType] = useState<GenerationType>(null);
  const router = useRouter();

  const handleGenerate = (data: CreateFormData) => {
    console.log("Gerar:", { generationType, ...data });
    // TODO: conectar com a API de geração
  };

  const handleBack = () => {
    if (generationType) {
      setGenerationType(null);
    } else {
      router.push("/");
    }
  };

  return (
    <section
      className={
        generationType
          ? styles.create
          : `${styles.create} ${styles["create--select"]}`
      }
    >
      <div className={styles.create__header}>
        <button className={styles.create__back} onClick={handleBack}>
          <AtomsIconSvg name="arrow-left" width="20px" height="20px" />
          <AtomsText
            fontSize="14px"
            fontWeight="normal"
            color="rgba(255,255,255,0.6)"
          >
            Voltar
          </AtomsText>
        </button>

        <AtomsText fontSize="28px" fontWeight="bold" color="#fff">
          {!generationType
            ? "O que você deseja criar?"
            : generationType === "design"
              ? "Criar Design"
              : "Criar Landing Page"}
        </AtomsText>
        <AtomsText
          fontSize="14px"
          fontWeight="normal"
          color="rgba(255,255,255,0.6)"
        >
          {!generationType
            ? "Escolha o tipo de projeto para começar"
            : "Preencha as informações para gerar seu projeto"}
        </AtomsText>
      </div>

      {!generationType ? (
        <TypeSelector onSelect={setGenerationType} />
      ) : (
        <CreateForm
          generationType={generationType}
          onGenerate={handleGenerate}
        />
      )}
    </section>
  );
};

export default TemplatesCreate;
