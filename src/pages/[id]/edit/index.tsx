import { useRouter } from "next/router";
import RootLayout from "@/layouts/RootLayout/Index";
import TemplateEdit from "@/templates/Edit/Index";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;

  const projectId = Array.isArray(id) ? id[0] : id;

  return (
    <RootLayout>
      <TemplateEdit projectId={projectId} />
    </RootLayout>
  );
}