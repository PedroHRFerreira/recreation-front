import styles from "./styles.module.scss";
import Card from "@/components/Card/Index";
import { useFetchHome } from "@/stores/Home/UseHome";
import { useRouter } from "next/router";

const TemplatesHome = () => {
  const homeData = useFetchHome();
  const router = useRouter();

  const handleAdd = () => {
    router.push("/create");
  };

  const handleClick = (id: number) => {
    router.push(`/${id}/edit`);
  };

  return (
    <section className={styles.home}>
      <div className={styles.home__grid}>
        {homeData.map((item) => (
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
