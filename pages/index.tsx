import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";

const FedComp = dynamic(
  () => {
    // @ts-ignore
    return window.wmProvider?.get("./FedComp").then((factory) => factory());
  },
  { ssr: false }
);


export default function Home() {
  return (
    <div className={styles.container}>
      hi
      <FedComp />
    </div>
  )
}
