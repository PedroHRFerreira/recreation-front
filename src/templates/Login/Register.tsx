import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Modal from "@/components/Modal/Index";
import { validationEmail } from "@/hooks/useValidate";

const TemplatesRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const validate = () => {
    if (!name) {
      toast.error("Nome é obrigatório.");
    }

    if (!email) {
      toast.error("Email é obrigatório.");
    }

    if (!password) {
      toast.error("Senha é obrigatória.");
    }

    if (!confirmPassword) {
      toast.error("Confirmação de senha é obrigatória.");
    }

    if (email && !validationEmail(email)) {
      toast.error("Email inválido.");
      return;
    }

    if (password && confirmPassword && password !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    return name && email && password && confirmPassword;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Register com:", { name, email, password });
    router.push("/login");
  };

  return (
    <Modal
      title="Criar conta"
      subtitle="Preencha os dados para se cadastrar"
      inputs={[
        {
          label: "Nome",
          type: "text",
          value: name,
          onChange: setName,
        },
        {
          label: "Email",
          type: "email",
          value: email,
          onChange: setEmail,
        },
        {
          label: "Senha",
          type: "password",
          value: password,
          onChange: setPassword,
        },
        {
          label: "Confirmar senha",
          type: "password",
          value: confirmPassword,
          onChange: setConfirmPassword,
        },
      ]}
      buttonLabel="CADASTRAR"
      buttonVariant="rounded"
      buttonSize="large"
      colorPrimary="#ff3d7f"
      colorSecondary="#ff1a6e"
      onSubmit={handleSubmit}
      footerText="Já tem conta? Fazer login"
      onFooterClick={() => router.push("/login")}
    />
  );
};

export default TemplatesRegister;
