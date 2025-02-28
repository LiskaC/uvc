import { FC } from 'react'
import { routes } from '../../routes'

import styles from './Navigation.module.scss'

export const Navigation: FC = () => (
	<nav className={styles.appNavigation}>
		<ol className={styles.navigationLinks}>
			{Object.values(routes).map((route) => (
				<li className={styles.navigationLink}>
					<a href={route.path}>{route.name}</a>
				</li>
			))}
		</ol>
	</nav>
);
