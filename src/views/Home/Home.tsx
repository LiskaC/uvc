import { FC } from 'react'

import TEMP from '../../assets/images/temp-image-replace.jpg'

import styles from './Home.module.scss'

export const Home: FC = () => (
  <div>
    <p>
      We are a Scottish based volunteer organisation of Ukrainian activists working for Ukrainian
      Victory.
      <br />
      <br />
      We focus on ...
      <br />
      <br />
      Make an impact - join us!
      <br />
      <br />
      You can find all of our regular events, initiatives you can support with actions or money,
      information, financial reporting and more.
    </p>
    <img src={TEMP} alt='protester' className={styles['home__image']} />
  </div>
)
