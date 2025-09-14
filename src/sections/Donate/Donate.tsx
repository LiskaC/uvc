import { FC } from 'react'
import { routes } from '../../routes'

import styles from './Donate.module.scss'

export const Donate: FC = () => (
  <section>
    <h1>Donate</h1>
    <p>
      <b>Your donation makes a real difference.</b> Every contribution, no matter how big or small,
      helps us provide urgent support to Ukraine and meet the needs of those who rely on us.
    </p>
    <h2>Ways to donate:</h2>
    <div className={styles['donate__options']}>
      <div>
        <h3>PayPal</h3>
        <p>Donate in any currency, even if you don’t have a PayPal account</p>
        <img src='src/assets/icons/paypal.png' alt='' aria-hidden />
        <a href='https://www.paypal.com/paypalme/UVC123' target='_blank' rel='noreferrer'>
          Donate via PayPal
        </a>
      </div>
      <div>
        <h3>At our demonstrations</h3>
        <p>
          <a href={routes.events.path}>Come to our Saturday demonstrations</a> and donate by cash or
          card
        </p>
        <img src='src/assets/images/cakes.png' alt='' aria-hidden />
      </div>
    </div>
  </section>
)
