import { FC, PropsWithChildren } from 'react'

import styles from './ListItem.module.scss'

export const ListItem: FC<PropsWithChildren> = (props) => (
  <li className={styles['list-item']}>{props.children}</li>
)
