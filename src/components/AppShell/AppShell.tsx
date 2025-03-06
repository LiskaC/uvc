import { FC } from 'react'
import { Outlet } from 'react-router'
import { NavBar } from '../NavBar/NavBar'
import { Social } from '../Social/Social'

import styles from './AppShell.module.scss'

export const AppShell: FC = () => (
  <div className={styles['app-shell']}>
    <header className={styles['app-shell__header']}>
      <h1 className={styles['app-shell__title']}>UKRAINIAN VICTORY CAMPAIGN</h1>
      <div className={styles['app-shell__navigation']}><NavBar/></div>
      <div className={styles['app-shell__social']}><Social/></div>
    </header>
    <main className={styles['app-shell__content']}>
      <Outlet/>
    </main>
  </div>
)
