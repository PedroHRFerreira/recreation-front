import LoginLayout from "@/layouts/Login";
import TemplatesLogin from "@/templates/Login/Index";

export default function Login() {
  return (
    <LoginLayout>
      <article>
        <TemplatesLogin />
      </article>
    </LoginLayout>
  );
}
