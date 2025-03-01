import { FC } from 'react'
import INSTAGRAM from '../../assets/icons/instagram.webp'
import FACEBOOK from '../../assets/icons/facebook.png'

import styles from './Social.module.scss'

export const Social: FC = () => (
  <nav className={styles.socials}>
    <a href='https://www.instagram.com/ukrainian_victory_campaign/' target='_blank'
      rel='noopener noreferrer'>
      <img src={INSTAGRAM} alt='Instagram' className={styles.socialsIcon}/>
    </a>
    <a href='https://www.facebook.com/UkrainianVictoryCampaign' target='_blank'
      rel='noopener noreferrer'>
      <img src={FACEBOOK} alt='Facebook' className={styles.socialsIcon}/>
    </a>
  </nav>
)
