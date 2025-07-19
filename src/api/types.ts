export type GoogleCalendarEvent = {
  kind: 'calendar#event'
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  /**
   * The event name
   */
  summary: string
  /**
   * The event description
   */
  description?: string
  /**
   * The event location
   */
  location?: string
  creator: {
    email: string
  }
  organizer: {
    email: string
    displayName?: string
    self?: boolean
  }
  start: {
    dateTime: string
    timeZone?: string
  }
  end: {
    dateTime: string
    timeZone?: string
  }
  visibility?: 'public' | 'private'
  iCalUID: string
  sequence: number
  /**
   * The link to the google hangout
   */
  hangoutLink?: string
  conferenceData?: {
    entryPoints?: {
      entryPointType: 'video'
      uri: string
      label?: string
    }[]
    conferenceSolution?: {
      key: { type: 'hangoutsMeet' }
      name: string
      iconUri?: string
    }
    conferenceId?: string
  }
  reminders: {
    useDefault: boolean
  }
  eventType: 'default'
}
