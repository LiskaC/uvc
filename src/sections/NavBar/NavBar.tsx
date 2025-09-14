import { FC, useState } from 'react'
import { hasSubroutes, Route, routes } from '../../routes'

import styles from './NavBar.module.scss'
import { RouteFilter } from '../../components/RouteFilter/RouteFilter'

interface Props {
  route: Route
}

const NavItem: FC<Props> = (props) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <li
      className={styles['navbar__item']}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <a href={props.route.path} className={styles['navbar__link']}>
        {props.route.name}
      </a>
      {showDropdown && hasSubroutes(props.route) ? (
        <nav className={styles['navbar__dropdown']}>
          <ol className={styles['navbar__dropdown-list']}>
            {Object.values(props.route.subroutes!).map((subroute) => (
              <RouteFilter key={subroute.name} route={subroute}>
                <li className={styles['navbar__dropdown-item']}>
                  <a href={subroute.path} className={styles['navbar__dropdown-link']}>
                    {subroute.name}
                  </a>
                </li>
              </RouteFilter>
            ))}
          </ol>
        </nav>
      ) : null}
    </li>
  )
}

export const NavBar: FC = () => (
  <nav className={styles['navbar']}>
    <ol className={styles['navbar__links']}>
      {Object.values(routes).map((route) => (
        <RouteFilter key={route.name} route={route}>
          <NavItem route={route} />
        </RouteFilter>
      ))}
    </ol>
  </nav>
)
