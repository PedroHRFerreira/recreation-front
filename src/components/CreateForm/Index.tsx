import { useState } from "react";
import styles from "./styles.module.scss";
import Input from "@/components/Input/Index";
import Button from "@/components/Button";
import ChipSelect from "@/components/ChipSelect/Index";
import ColorPicker from "@/components/ColorPicker/Index";
import type { CreateFormTypes } from "./CreateForm.types";
import type { CreateFormData } from "@/templates/Create/Create.types";

const STYLE_OPTIONS = [
  { label: "Moderno", value: "moderno" },
  { label: "Minimalista", value: "minimalista" },
  { label: "Corporativo", value: "corporativo" },
  { label: "Criativo", value: "criativo" },
  { label: "Elegante", value: "elegante" },
];

const SECTION_OPTIONS = [
  { label: "Hero", value: "hero" },
  { label: "Sobre", value: "about" },
  { label: "Serviços", value: "services" },
  { label: "Features", value: "features" },
  { label: "Depoimentos", value: "testimonials" },
  { label: "Preços", value: "pricing" },
  { label: "Contato", value: "contact" },
  { label: "FAQ", value: "faq" },
  { label: "CTA", value: "cta" },
  { label: "Footer", value: "footer" },
];

const CreateForm = ({ generationType, onGenerate }: CreateFormTypes) => {
  const [formData, setFormData] = useState<CreateFormData>({
    name: "",
    businessType: "",
    description: "",
    style: "",
    colorPrimary: "#ff3d7f",
    colorSecondary: "#ff1a6e",
    sections: [],
  });

  const handleInputChange = (field: keyof CreateFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStyleSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, style: value }));
  };

  const handleSectionToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.includes(value)
        ? prev.sections.filter((s) => s !== value)
        : [...prev.sections, value],
    }));
  };

  const handleColorChange = (index: number, value: string) => {
    const field = index === 0 ? "colorPrimary" : "colorSecondary";
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.name.trim() && formData.businessType.trim() && formData.style;

  const handleSubmit = () => {
    if (!isFormValid) return;
    onGenerate(formData);
  };

  return (
    <div className={styles["create-form"]}>
      <div className={styles["create-form__group"]}>
        <Input
          label="Nome do projeto"
          placeholder="Ex: Meu Site Incrível"
          value={formData.name}
          onInput={(val) => handleInputChange("name", val)}
        />
      </div>

      <div className={styles["create-form__group"]}>
        <Input
          label="Tipo de negócio"
          placeholder="Ex: Restaurante, Tecnologia, Moda..."
          value={formData.businessType}
          onInput={(val) => handleInputChange("businessType", val)}
        />
      </div>

      <div className={styles["create-form__group"]}>
        <Input
          label="Descrição do projeto"
          placeholder="Descreva brevemente o que deseja..."
          value={formData.description}
          onInput={(val) => handleInputChange("description", val)}
        />
      </div>

      <ChipSelect
        label="Estilo visual"
        options={STYLE_OPTIONS}
        selected={formData.style}
        onSelect={handleStyleSelect}
      />

      <ColorPicker
        label="Cores do projeto"
        colors={[
          { label: "Primária", value: formData.colorPrimary },
          { label: "Secundária", value: formData.colorSecondary },
        ]}
        onChange={handleColorChange}
      />

      {generationType === "landing-page" && (
        <ChipSelect
          label="Seções da página"
          options={SECTION_OPTIONS}
          selected={formData.sections}
          multiple
          onSelect={handleSectionToggle}
        />
      )}

      <div className={styles["create-form__actions"]}>
        <Button
          variant="primary"
          size="large"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Gerar {generationType === "design" ? "Design" : "Landing Page"}
        </Button>
      </div>
    </div>
  );
};

export default CreateForm;
