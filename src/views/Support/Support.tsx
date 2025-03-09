import { FC } from 'react'
import { Donate } from '../../sections/Donate/Donate'
import { Communicate } from '../../sections/Communicate/Communicate'
import { Initiatives } from '../Initiatives/Initiatives'
import { Volunteer } from '../../sections/Volunteer/Volunteer'

export const Support: FC = () => (
  <div>
    <Donate/>
    <Initiatives/>
    <Volunteer/>
    <Communicate/>
  </div>
)
