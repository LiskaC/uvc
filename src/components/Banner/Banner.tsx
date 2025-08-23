import { FC, PropsWithChildren } from 'react'
import styles from './Banner.module.scss'

export const Banner: FC<PropsWithChildren> = (props) => (
  <div className={styles['banner']}>{props.children}</div>
)
