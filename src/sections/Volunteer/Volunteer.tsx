import { FC } from 'react'
import { routes } from '../../routes'

import styles from './Volunteer.module.scss'

interface Props {
  name: string
  description: string
  link: {
    text: string
    address: string
  }
}

const Opportunity: FC<Props> = props => (
  <div className={styles['opportunity']}>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <a href={props.link.address}>{props.link.text}</a>
  </div>
)

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
    <h2>Volunteer with other groups</h2>
    <div>
      <Opportunity name='Edinburgh Spiders' description='Description: Weave camouflage nets.'
        link={{ text: 'where to find timetable', address: '' }}/>
      <Opportunity name='Help Ukraine Scotland' description='Lots of events and stuff.'
        link={{ text: 'facebook group', address: 'https://www.facebook.com/groups/helpukrainescotland' }}/>
    </div>
  </section>
)
