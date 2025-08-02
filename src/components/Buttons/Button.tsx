import { FC } from 'react'

import styles from './Button.module.scss'

interface Props {
  text: string
  onClick: () => void
  extraStyles?: string
}

export const Button: FC<Props> = (props) => (
  <button className={`${styles['button']} ${props.extraStyles ?? ''}`} onClick={props.onClick}>
    {props.text}
  </button>
)
