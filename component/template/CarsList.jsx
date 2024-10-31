import { useRouter } from "next/router";
import Back from "../icons/Back"
import Card from "../module/Card"
import styles from "./CarsList.module.css";
export default function CarsList({ data }) {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={clickHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map(item => (
          <Card key={item.key}  {...item}/>
        ))}
      </div>
    </div>
  );
}
