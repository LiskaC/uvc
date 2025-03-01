import { FC } from 'react';
import { Outlet } from 'react-router'
import { Navigation } from '../NavBar/NavBar'
import { Social } from '../Social/Social'

import styles from './AppShell.module.scss'

export const AppShell: FC = () => (
  <div className={styles.appShell}>
    <header className={styles.appHeader}>
      <h1>Ukrainian Victory Campaign</h1>
      <Social/>
    </header>
    <Navigation/>
    <main className='app-content'>
      <Outlet/>
    </main>
  </div>
)
