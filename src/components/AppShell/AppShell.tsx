import { FC } from 'react';
import { Outlet } from 'react-router'
import { Navigation } from '../NavBar/NavBar'
import { Social } from '../Social/Social'

import styles from './AppShell.module.scss'

export const AppShell: FC = () => (
  <div className={styles.appShell}>
    <header className={styles.appHeader}>
      <h1 className={styles.title}>UKRAINIAN VICTORY CAMPAIGN</h1>
      <div className={styles.navigation}><Navigation/></div>
      <div className={styles.social}><Social/></div>
    </header>
    <main className={styles.appContent}>
      <Outlet/>
    </main>
  </div>
)
