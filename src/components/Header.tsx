import styles from './Header.module.css';

import pageLogo from '../assets/pageLogo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={pageLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
