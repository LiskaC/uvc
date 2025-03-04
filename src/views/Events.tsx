import { FC, useEffect, useState } from 'react'
import { fetchEvents } from '../api/google'
import { GoogleCalendarEvent } from '../api/types'

import styles from './Events.module.scss'

const CALENDAR_ID = process.env.CALENDAR_ID

const Event: FC<{event: GoogleCalendarEvent}> = props => (
  <div key={props.event.id} className={styles.event}>
    <h2>{props.event.summary}</h2>
    <p>{props.event.start.dateTime}</p>
    {props.event.location && <p>{props.event.location}</p>}
    {props.event.description && <p>{props.event.description}</p>}
    {props.event.hangoutLink && <a href={props.event.hangoutLink}>Join here!</a>}
  </div>
)

export const Events: FC = () => {
  const [events, setEvents] = useState<GoogleCalendarEvent[]>([])

  useEffect(() => {
    async function loadEvents() { setEvents(await fetchEvents()) }
    loadEvents()
  }, [])

  return (
    <>
      <h1>Events</h1>
      <h2>Sundays 13:00 - 17:00, Wellington Statue</h2>
      <p>Join our weekly demo at Wellington statue</p>
      <iframe className={styles.calendar}
        src={`https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=Europe%2FBerlin`}/>
      <div>
        <p>An alternate display for events:</p>
        {events.map(event => <Event event={event}/>)}
      </div>
    </>
  )
}
