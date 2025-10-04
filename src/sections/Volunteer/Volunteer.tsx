import { FC } from 'react'
import { routes } from '../../routes'

import VOLUNTEER from '../../assets/images/volunteer.jpg'

import styles from './Volunteer.module.scss'

export const Volunteer: FC = () => (
  <section>
    <div>
      <h1>Volunteer with us</h1>
      <p>
        Your time, skills, and energy can make a real difference. Whether you can join us once a
        week or once a month — <b>every action matters.</b>
      </p>
      <p>
        The simplest way to start volunteering is to show up at our{' '}
        <b>weekly Saturday Public Demonstration</b> at the Duke of Wellington Monument in Edinburgh,
        or take part in our other <a href={routes.events.path}>events</a>.
      </p>
    </div>
    <div className={styles['volunteer-ways']}>
      <div>
        <p>You can also volunteer with us in many different ways:</p>
        <ul>
          <li>Organising and running events</li>
          <li>Helping with design, social media, and photography</li>
          <li>Translating and creating content</li>
          <li>Baking for our fundraising sales</li>
          <li>Reaching out to the community and building connections</li>
        </ul>
      </div>
      <img src={VOLUNTEER} alt='Volunteers at a demonstration' />
    </div>
    <p>
      If you’d like to know more about other ways to volunteer with UVC, or if you have any
      questions, ask our volunteers at Saturday public demonstrations or{' '}
      <a
        // eslint-disable-next-line max-len
        href='https://docs.google.com/forms/d/e/1FAIpQLSdH4mXkx09d04GKyghh07hWAvDNandl-0OQOEum6WQDMKm4yg/viewform'
        target='_blank'
        rel='noreferrer'
      >
        send us a message through our Contact Us form
      </a>{' '}
      — we’d love to hear from you.
    </p>
    <div className={styles['volunteer__cta']}>
      <p>
        📋 <b>Ready to get started?</b> Fill in our volunteer form and join the movement for
        Ukrainian victory.
      </p>
      <a
        className='cta'
        // eslint-disable-next-line max-len
        href='https://docs.google.com/forms/d/e/1FAIpQLSdH4mXkx09d04GKyghh07hWAvDNandl-0OQOEum6WQDMKm4yg/viewform'
        target='_blank'
        rel='noreferrer'
      >
        Volunteer form
      </a>
    </div>
  </section>
)
