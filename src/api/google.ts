import { GoogleCalendarEvent } from './types'

const CALENDAR_ID = process.env.CALENDAR_ID
const CALENDAR_KEY = process.env.CALENDAR_KEY
const GOOGLE_CALENDAR_EVENTS_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${CALENDAR_KEY}`

export async function fetchEvents(): Promise<GoogleCalendarEvent[]> {
  try {
    const res = await fetch(GOOGLE_CALENDAR_EVENTS_URL)

    if (!res.ok) {
      throw new Error(`Bad response: ${res.status}`)
    }

    const data = await res.json()
    return data.items
  } catch (e) {
    console.error('Error fetching events: ', e)
    return []
  }
}
