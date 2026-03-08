import RootLayout from "@/layouts/RootLayout/Index";
import TemplatesHome from "@/templates/Home/Index";
import { useAuthRedirect } from "@/hooks/middleware/auth";

export default function Home() {
  useAuthRedirect();

  return (
    <RootLayout>
      <article>
        <TemplatesHome />
      </article>
    </RootLayout>
  );
}
