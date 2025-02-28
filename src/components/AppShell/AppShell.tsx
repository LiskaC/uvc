import { FC } from 'react';
import { Outlet } from 'react-router'
import { Navigation } from '../navigation/Navigation'

import styles from './AppShell.module.scss'

export const AppShell: FC = () => (
  <div className={styles.appShell}>
    <header className={styles.appHeader}>Ukrainian Victory Campaign</header>
    <Navigation/>
    <main className='app-content'>
      <Outlet/>
    </main>
  </div>
)
