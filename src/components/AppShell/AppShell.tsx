import { FC, useState } from 'react'
import { Outlet } from 'react-router'
import { NavBar } from '../../sections/NavBar/NavBar'
import { Social } from '../Social/Social'
import { Hamburger } from '../Hamburger/Hamburger'
import { SideMenu } from '../../sections/SideMenu/SideMenu'

import LOGO from '../../assets/icons/logo-light.svg'

import styles from './AppShell.module.scss'
import { routes } from '../../routes'

export const AppShell: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return <AppShellView isMenuOpen={menuOpen} toggleMenu={toggleMenu} />
}

interface Props {
  isMenuOpen: boolean
  toggleMenu: () => unknown
}

const AppShellView: FC<Props> = (props) => (
  <div className={styles['app-shell']}>
    <header
      className={`${styles['app-shell__header']}
      ${props.isMenuOpen ? styles['app-shell__header--sticky'] : ''}`}
    >
      <div className={styles['app-shell__hamburger']}>
        <Hamburger onClick={props.toggleMenu} isOpen={props.isMenuOpen} />
      </div>
      <a href={routes.home.path} className={styles['app-shell__logo']}>
        <img className={styles['app-shell__icon']} src={LOGO} alt='' />
        <h1 className={styles['app-shell__title']}>UKRAINIAN VICTORY CAMPAIGN</h1>
      </a>
      <div className={styles['app-shell__navigation']}>
        <NavBar />
      </div>
      <div className={styles['app-shell__social']}>
        <Social />
      </div>
    </header>
    <main className={styles['app-shell__content']}>
      <div className={styles['app-shell__sidemenu']}>
        <SideMenu isMenuOpen={props.isMenuOpen} toggleMenu={props.toggleMenu} />
      </div>
      <Outlet />
    </main>
  </div>
)
