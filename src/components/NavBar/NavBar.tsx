import { FC, useState } from 'react'
import { Route, routes } from '../../routes'

import styles from './NavBar.module.scss'

const NavItem: FC<{route: Route}> = props => {
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<li className={styles.navigationItem} onMouseEnter={() => setShowDropdown(true)}
			onMouseLeave={() => setShowDropdown(false)}>
			<a href={props.route.path} className={styles.navigationLink}>{props.route.name}</a>
			{(showDropdown && (props.route.subroutes !== undefined)) ? (
				<nav className={styles.dropdownMenu}>
					<ol>
						{Object.values(props.route.subroutes!).map((subroute) => (
							<li key={subroute.path} className={styles.dropdownItem}>
								<a href={subroute.path}>{subroute.name}</a>
							</li>
						))}
					</ol>
				</nav>
			) : null}
		</li>
	)
}

export const Navigation: FC = () => (
	<nav className={styles.appNavigation}>
		<ol className={styles.navigationLinks}>
			{Object.values(routes).map((route) => <NavItem route={route} key={route.name}/>)}
		</ol>
	</nav>
);
