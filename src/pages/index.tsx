import RootLayout from "@/layouts/RootLayout";
import TemplatesHome from "@/templates/Home/Index";

export default function Home() {
  return (
    <RootLayout>
      <article>
        <TemplatesHome />
      </article>
    </RootLayout>
  );
}
