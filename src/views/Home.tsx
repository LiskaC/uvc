import { FC } from 'react';

import TEMP from '../assets/images/temp-image-replace.jpg'

import styles from './Home.module.scss'

export const Home: FC = () => (
  <div>
    <p>
      We are a Scottish based volunteer organisation of Ukrainian activists working for Ukrainian Victory.
      <br/><br/>
      We focus on ... 
    </p>
    <img src={TEMP} alt='protester' className={styles.image}/>
  </div>
)
