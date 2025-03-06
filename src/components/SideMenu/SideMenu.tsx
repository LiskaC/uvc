import { FC } from 'react'
import { Route, routes } from '../../routes'

import styles from './SideMenu.module.scss'

interface MenuItemProps {
  route: Route
}

const MenuItem: FC<MenuItemProps> = props => (
  <li className={styles['navbar__item']}>
    <a href={'/uvc/#' + props.route.path} className={styles['navbar__link']}>
      {props.route.name}
    </a>
    {props.route.subroutes && (
      <ul className={styles['navbar__subroutes']}>
        {Object.values(props.route.subroutes).map((subroute) => (
          <li key={subroute.path} className={styles['navbar__subroute-item']}>
            <a href={'/uvc/#' + subroute.path} className={styles['navbar__subroute-link']}>
              {subroute.name}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
)

interface Props {
  isMenuOpen: boolean
}

export const SideMenu: FC<Props> = props => (
  <nav className={`${styles['navbar']} ${props.isMenuOpen ? styles['navbar--open'] : ''}`}>
    <ol className={styles['navbar__links']}>
      {Object.values(routes).map(route => <MenuItem route={route}/>)}
    </ol>
  </nav>
)
