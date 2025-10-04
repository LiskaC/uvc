import { FC } from 'react'
import { Banner } from '../../components/Banner/Banner'

import TEMP from '../../assets/images/temp-image-replace.jpg'

import styles from './Home.module.scss'

export const Home: FC = () => (
  <section>
    <div>
      <p>
        We are a Scotland-based volunteer organisation of Ukrainians and friends of Ukraine, united
        in action for Ukrainian victory.
      </p>
      <p>
        🌻We unite together volunteers in Scotland and Ukraine in a show of solidarity with direct
        impact on the ground. In Scotland we bring forward the voices of Ukrainians to address
        disinformation, while our support in Ukraine goes to the most urgent hotspots.
      </p>
      <p>
        We organise weekly public demonstrations in Edinburgh, raise funds for delivering direct
        support to those on the frontlines and trusted grassroots initiatives in Ukraine, and build
        a strong, visible presence of solidarity through events, educational outreach, and creative
        activism.
      </p>
    </div>
    <div>
      <h2>💙 What We Do</h2>
      <ul className={styles['home__list']}>
        <li>Weekly public actions in support of Ukraine</li>
        <li>Bake sales and grassroots fundraising</li>
        <li>Aid to frontline units based on direct requests</li>
        <li>Support for Ukrainian volunteers</li>
        <li>Cultural and educational events</li>
        <li>Film screenings and community gatherings</li>
        <li>Online Q&A sessions with Ukrainian soldiers</li>
      </ul>
      <p>
        Whether you&apos;re looking to take action, support financially, or simply learn more —
        you’re in the right place.
      </p>
      <p className={styles['home__indented']}>
        <b>Make a real difference. Take a stand for Ukraine. And yes — we have cakes. 😁</b>
      </p>
    </div>
    <div>
      <h2>📍 Edinburgh Is Where We March</h2>
      <p>
        <a href='/events'>Join us every week in central Edinburgh to stand with Ukraine.</a> Bring a
        flag, a friend, or just yourself — you’ll always be welcome.
      </p>
    </div>
    <Banner>
      <img src={TEMP} alt='protester' className={styles['home__image']} />
    </Banner>
  </section>
)
