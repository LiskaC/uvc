import { FC } from 'react'

import styles from './Button.module.scss'

interface Props {
  text: string
  extraStyles: string
}

export const Submit: FC<Props> = props => (
  <button type='submit' className={`${styles['button']} ${props.extraStyles}`}>
    {props.text}
  </button>
)
