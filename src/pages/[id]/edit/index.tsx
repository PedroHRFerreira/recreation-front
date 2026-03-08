import { useRouter } from "next/router";
import RootLayout from "@/layouts/RootLayout/Index";
import TemplateEdit from "@/templates/Edit/Index";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <RootLayout>
      <TemplateEdit projectId={id} />
    </RootLayout>
  );
}
