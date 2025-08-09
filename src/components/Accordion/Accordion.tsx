import { FC, useState } from 'react'

import styles from './Accordion.module.scss'

type Props = {
  title: string
  content: string[]
}

export const Accordion: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles['accordion']}>
      <button className={styles['header']} onClick={() => setIsOpen(!isOpen)}>
        <h4 className={styles['title']}>{props.title}</h4>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className={styles['content']}>
          {props.content.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  )
}
