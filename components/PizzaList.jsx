import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard1";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FUN..FAST..TASTY..DELICIOUS</h1>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;