import { FC, Fragment } from 'react'

import styles from './Events.module.scss'

const CALENDAR_ID = process.env.CALENDAR_ID

export const Events: FC = () => (
  <Fragment>
    <h1>Events</h1>
    <p>
      Here you can find all of our upcoming activities in one place. Our Google Calendar is
      regularly updated with event details and locations — so you’ll always know where to find us.
    </p>
    <section>
      <h2>🇺🇦 Weekly Public Demonstrations</h2>
      <p>
        Every <b>Saturday</b>, we gather for our <b>Public Action</b> at the{' '}
        <b>Duke of Wellington Monument</b> in
        <b>Edinburgh</b> from <b>2pm to 4pm</b>.
      </p>
      <p>Come join us: bring posters, flags, and friends!</p>
    </section>
    <iframe
      className={styles['calendar']}
      src={`https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=Europe/London`}
    />
  </Fragment>
)
