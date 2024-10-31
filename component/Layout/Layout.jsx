import Link from "next/link";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <h2>JEFFCAR</h2>
          <p>choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/jeffDev99">JeffDev99</a> Next.js (13.0.1) pure | JeffCar project &copy;
      </footer>
    </>
  );
}
