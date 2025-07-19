import { FC, useEffect, useState } from 'react'
import { fetchEvents } from '../../api/google'
import { GoogleCalendarEvent } from '../../api/types'

import styles from './Events.module.scss'

const CALENDAR_ID = process.env.CALENDAR_ID

interface Props {
  event: GoogleCalendarEvent
}

function sortByDateTime(a: string, b: string) {
  const dateA = new Date(a).getTime()
  const dateB = new Date(b).getTime()
  return dateB - dateA
}

const Event: FC<Props> = (props) => (
  <div key={props.event.id} className={styles['event']}>
    <h2 className={styles['event__title']}>{props.event.summary}</h2>
    <p className={styles['event__datetime']}>{props.event.start.dateTime}</p>
    {props.event.location && (
      <p className={styles['event__location']}>{props.event.location}</p>
    )}
    {props.event.description && (
      <p className={styles['event__description']}>{props.event.description}</p>
    )}
    {props.event.hangoutLink && (
      <a href={props.event.hangoutLink} className={styles['event__link']}>
        Join here!
      </a>
    )}
  </div>
)

export const Events: FC = () => {
  const [events, setEvents] = useState<GoogleCalendarEvent[]>([])

  useEffect(() => {
    async function loadEvents() {
      const events = await fetchEvents()
      const sortedEvents = events.sort((a, b) =>
        sortByDateTime(a.start.dateTime, b.start.dateTime)
      )
      setEvents(sortedEvents)
    }
    loadEvents()
  }, [])

  return (
    <>
      <h1>Events</h1>
      <h2>Sundays 13:00 - 17:00, Wellington Statue</h2>
      <p>Join our weekly demo at Wellington statue</p>
      <iframe
        className={styles['calendar']}
        src={`https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=Europe%2FBerlin`}
      />
      <div className={styles['events__list']}>
        <p>An alternate display for events:</p>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}
