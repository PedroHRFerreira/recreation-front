import styles from "./styles.module.scss";
import Card from "@/components/Card/Index";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { getProjects } from "@/store/services/projects";

const TemplatesHome = () => {
  const router = useRouter();
  const projects = getProjects();
  const { search, selectedStatus, selectedType } = useAppSelector(
    (state) => state.ui,
  );

  const handleAdd = () => {
    router.push("/create");
  };

  const handleClick = (id: number) => {
    router.push(`/${id}/edit`);
  };

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        !normalizedSearch ||
        project.title.toLowerCase().includes(normalizedSearch) ||
        project.description.toLowerCase().includes(normalizedSearch);

      const matchesType =
        selectedType === "todos" || project.type === selectedType;

      const matchesStatus = project.status === selectedStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [projects, search, selectedStatus, selectedType]);

  return (
    <section className={styles.home}>
      <div className={styles.home__grid}>
        {filteredProjects.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            onClick={() => handleClick(item.id)}
          />
        ))}

        <Card onAdd={handleAdd} />
      </div>
    </section>
  );
};

export default TemplatesHome;
