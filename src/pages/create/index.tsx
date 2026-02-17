import RootLayout from "@/layouts/RootLayout";
import TemplatesCreate from "@/templates/Create/Index";
import { useAuthRedirect } from "@/hooks/middleware/auth";

export default function Create() {
  useAuthRedirect();

  return (
    <RootLayout>
      <article>
        <TemplatesCreate />
      </article>
    </RootLayout>
  );
}
