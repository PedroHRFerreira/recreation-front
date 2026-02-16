import RootLayout from "@/layouts/RootLayout";
import { useAuthRedirect } from "@/hooks/middleware/auth";

export default function Home() {
  useAuthRedirect();

  return (
    <RootLayout>
      <article>
        <h1>Tela de Home</h1>
      </article>
    </RootLayout>
  );
}
