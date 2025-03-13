import { FC } from 'react'
import { routes } from '../../routes'

import styles from './Volunteer.module.scss'

export const Volunteer: FC = () => (
  <section>
    <h1>Volunteer</h1>
    <p>Volunteer with us!</p>
    <p>
      The most basic way to volunteer is to show support. Join our weekly Sunday demonstration at
      Wellington Statue in Edinburgh, or one of our other <a href={routes.events.path}>events</a>.
      <br/>
      If you'd like to help some other way you can also talk to us there.
      <br/>
      Other ways people can volunteer with UVC.....
    </p>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdH4mXkx09d04GKyghh07hWAvDNandl-0OQOEum6WQDMKm4yg/viewform'
      target='_blank'>
      Volunteer form
    </a>
  </section>
)
