import styles from "./styles.module.scss";
import Card from "@/components/Card/Index";
import { useFetchHome } from "@/stores/Home/UseHome";

const TemplatesHome = () => {
  const homeData = useFetchHome();

  const handleAdd = () => {
    console.log("cadastrar nova card");
  };

  const handleClick = (id: number) => {
    console.log("abriu card", id);
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
