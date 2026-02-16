import LoginLayout from "@/layouts/Login";
import TemplatesRegister from "@/templates/Login/Register";

export default function Register() {
  return (
    <LoginLayout>
      <article>
        <TemplatesRegister />
      </article>
    </LoginLayout>
  );
}
