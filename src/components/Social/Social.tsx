import { FC } from 'react'

import INSTAGRAM from '../../assets/icons/instagram.png'
import FACEBOOK from '../../assets/icons/facebook.png'

import styles from './Social.module.scss'

export const Social: FC = () => (
  <nav className={styles['social']}>
    <a
      href='https://www.instagram.com/ukrainian_victory_campaign/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={INSTAGRAM} alt='Instagram' className={styles['social__icon']} />
    </a>
    <a
      href='https://www.facebook.com/UkrainianVictoryCampaign'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={FACEBOOK} alt='Facebook' className={styles['social__icon']} />
    </a>
  </nav>
)
