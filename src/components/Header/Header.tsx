import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/overview">
        <Button size="large" className={styles.link}>Overview</Button>
      </Link>
      <Link to="/players">
        <Button size="large" className={styles.link}>Players</Button>
      </Link>
      <Link to="/create">
        <Button size="large" className={styles.link}>Create</Button>
      </Link>
    </header>
  );
}

export default Header;
