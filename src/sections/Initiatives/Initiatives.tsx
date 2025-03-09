import { FC } from 'react'
import { Initiative, initiatives } from './data'

import styles from './Initiatives.module.scss'

interface Props {
  initiative: Initiative
}

const Intiative: FC<Props> = props => (
  <div className={styles['initiative']}>
    <h2>{props.initiative.name}</h2>
    <div className={styles['initiative__gallery']}>
     {props.initiative.images.map(img => (
        <img key={img} src={img} alt='image in gallery' width='300px'/>
      ))}
    </div>
    <p>{props.initiative.description}</p>
    <div className={styles['initiative__links']}>
      {props.initiative.links.map(link => <a href={link.url}>{link.text}</a>)}
    </div>
  </div>
)

export const Initiatives: FC = () => (
  <section>
    <h1>Find initiatives to support</h1>
    <p>
      We work with many groups who have need of volunteers, supplies and donations. Want to help?
      Find initiatives to support here!
    </p>
    <div>
      <label htmlFor='search'>
        <span>Search here: </span>
        <input type='text' id='search' name='search' placeholder='drones...'/>
      </label>
      <div>
        {initiatives.map(item => <Intiative initiative={item}/>)}
      </div>
    </div>
  </section>
)
