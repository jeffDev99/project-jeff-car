import { useReducer, useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";
export default function SearchBar() {
    const router = useRouter()
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const searchHandler = () => {
    if(min && max){
        router.push(`/filter/${min}/${max}`)
    }else{
        alert("please enter min and max value")
    }
  };
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Inter min-price" value={min} onChange={(e) => setMin(e.target.value)} />
      <input type="text" placeholder="Inter max-price" value={max} onChange={(e) => setMax(e.target.value)} />
      <button className={styles.btn} onClick={searchHandler}>
        Search
      </button>
    </div>
  );
}
