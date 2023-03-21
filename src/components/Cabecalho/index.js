import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import styles from "./Cabecalho.css";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo de Alura Space" />
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text" placeholder="O você procura?" />
        <img src={search} alt="Ícone de Lupa" />
      </div>
    </header>
  );
}
