import { FC } from 'react'

import styles from './Link.module.scss'

type Props = {
  href: string
  text: string
}

export const Link: FC<Props> = (props) => (
  <div className={styles['link']}>
    <span>👉</span>
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.text}
    </a>
  </div>
)
