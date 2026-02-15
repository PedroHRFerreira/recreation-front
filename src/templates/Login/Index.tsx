"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Modal from "@/components/Modal/Index";
import { validationEmail } from "@/hooks/useValidate";

const TemplatesLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validate = () => {
    if (!email) {
      toast.error("Email é obrigatório.");
    }

    if (!password) {
      toast.error("Senha é obrigatória.");
    }

    if (email && !validationEmail(email)) {
      toast.error("Email inválido.");
      return;
    }

    return email && password;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Login com:", { email, password });
    router.push("/");
  };

  return (
    <Modal
      icon="register_login"
      iconWidth="64px"
      iconHeight="64px"
      inputs={[
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
      ]}
      buttonLabel="LOGIN"
      buttonVariant="rounded"
      buttonSize="large"
      colorPrimary="#ff3d7f"
      colorSecondary="#ff1a6e"
      onSubmit={handleSubmit}
    />
  );
};

export default TemplatesLogin;
