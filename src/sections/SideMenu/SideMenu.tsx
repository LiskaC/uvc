import { FC } from 'react'
import { useNavigate } from 'react-router'
import { hasSubroutes, Route, routes } from '../../routes'

import styles from './SideMenu.module.scss'

interface MenuItemProps {
  route: Route
  toggleMenu: () => void
}

const MenuItem: FC<MenuItemProps> = props => {
  const navigate = useNavigate()

  function handleClick(path: string) {
    navigate(path)
    props.toggleMenu()
  }

  return (
    <li className={styles['navbar__item']}>
      <button onClick={() => handleClick(props.route.path)}
        className={styles['navbar__link']}>
        {props.route.name}
      </button>
      {hasSubroutes(props.route) && (
        <ul className={styles['navbar__subroutes']}>
          {Object.values(props.route.subroutes).map((subroute) => (
            <li key={subroute.path} className={styles['navbar__subroute-item']}>
              <button onClick={() => handleClick(subroute.path)}
                className={styles['navbar__subroute-link']}>
                {subroute.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

interface Props {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const SideMenu: FC<Props> = props => (
  <nav className={`${styles['navbar']} ${props.isMenuOpen ? styles['navbar--open'] : ''}`}>
    <ol className={styles['navbar__links']}>
      {Object.values(routes).map(route => <MenuItem key={route.name} route={route}
        toggleMenu={props.toggleMenu}/>)}
    </ol>
  </nav>
)
