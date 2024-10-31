import styles from "./AllBtn.module.css";
import Link from "next/link";
export default function AllBtn() {
  return <div className={styles.container}>
    <Link href={"/cars"}>All Cars</Link>
  </div>;
}
