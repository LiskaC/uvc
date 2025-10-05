import { FC } from 'react'
import { routes } from '../../routes'

import PAYPAL from '../../assets/icons/paypal.png'
import FUNDRAISING from '../../assets/images/cakes.jpg'

import styles from './Donate.module.scss'

export const Donate: FC = () => (
  <section>
    <div>
      <h1>Donate</h1>
      <p>
        <b>Your donation makes a real difference.</b> Every contribution, no matter how big or
        small, helps us provide urgent support to Ukraine and meet the needs of those who rely on
        us.
      </p>
    </div>
    <div>
      <h2>Ways to donate:</h2>
      <div className={styles['donate__options']}>
        <a
          className={styles['donate__option']}
          href='https://www.paypal.com/paypalme/UVC123'
          target='_blank'
          rel='noreferrer'
        >
          <h3>PayPal</h3>
          <p>Donate in any currency, even if you don’t have a PayPal account</p>
          <img className={styles['donate__image']} src={PAYPAL} alt='' aria-hidden />
          <p>Donate via PayPal</p>
        </a>
        <a href={routes.events.path} className={styles['donate__option']}>
          <h3>At our demonstraions</h3>
          <p>Come to our Saturday demonstrations and donate by cash or card</p>
          <img className={styles['donate__image']} src={FUNDRAISING} alt='' aria-hidden />
        </a>
      </div>
    </div>
  </section>
)
