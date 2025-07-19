import { FC } from 'react'

import styles from './Hamburger.module.scss'

interface Props {
  onClick: () => unknown
  isOpen: boolean
}

export const Hamburger: FC<Props> = (props) => (
  <button
    onClick={props.onClick}
    className={`${styles['hamburger']} ${props.isOpen ? styles['hamburger--open'] : ''}`}
  >
    <div className={styles['hamburger__icon']}></div>
  </button>
)
