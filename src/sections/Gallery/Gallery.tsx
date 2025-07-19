import { FC } from 'react'
import { EventGallery, gallery } from './data'

import styles from './Gallery.module.scss'

interface Props {
  event: EventGallery
}

const Event: FC<Props> = (props) => (
  <div>
    <h2>{props.event.name}</h2>
    <div className={styles['event__images']}>
      {props.event.photoUrls.map((photo, i) => (
        <img key={photo} className={styles['event__image']} src={photo} alt={`image ${i + 1}`} />
      ))}
    </div>
  </div>
)

export const Gallery: FC = () => (
  <section>
    <h1>Event Gallery</h1>
    <div>
      {gallery.map((event) => (
        <Event key={event.name} event={event} />
      ))}
    </div>
  </section>
)
