import { FC } from 'react'
import { Need, needs } from './data'

import styles from './Needs.module.scss'

interface Props {
  need: Need
}

const Need: FC<Props> = props => (
  <div className={styles['need']}>
    <h2>{props.need.name}</h2>
    <div className={styles['need__gallery']}>
     {props.need.images.map(img => (
        <img key={img} src={img} alt='image in gallery' width='300px'/>
      ))}
    </div>
    <p>{props.need.description}</p>
    <div className={styles['need__links']}>
      {props.need.links.map(link => <a href={link.url}>{link.text}</a>)}
    </div>
  </div>
)

export const Needs: FC = () => (
  <section>
    <h1>Current needs</h1>
    <p>
      We work with many groups who have need of specific supplies and donations. Want to help?
      Find needs to support here!
    </p>
    <div>
      <label htmlFor='search'>
        <span>Search here: </span>
        <input type='text' id='search' name='search' placeholder='drones...'/>
      </label>
      <div>
        {needs.map(item => <Need need={item}/>)}
      </div>
    </div>
  </section>
)
