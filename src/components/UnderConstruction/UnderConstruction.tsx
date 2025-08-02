import { FC } from 'react'
import styles from './UnderConstruction.module.scss'

export const UnderConstruction: FC = () => (
  <div className={styles['under-construction']}>
    <div className={styles['spinner']}>
      <div className={styles['icon']}>🚧</div>
      <h1>Under Construction</h1>
    </div>
  </div>
)
