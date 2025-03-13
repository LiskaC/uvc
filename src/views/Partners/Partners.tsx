import { FC } from 'react'

interface Props {
  name: string
  description: string
  link: {
    text: string
    address: string
  }
}

const Partner: FC<Props> = props => (
  <div>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <a href={props.link.address}>{props.link.text}</a>
  </div>
)

export const Partners: FC = () => (
  <>
    <h1>Groups we partner with</h1>
    <Partner name='Edinburgh Spiders' description='Description: Weave camouflage nets.'
      link={{ text: 'where to find timetable', address: '' }}/>
    <Partner name='Battalion Edi' description='Cars.'
      link={{ text: 'instagram', address: '' }}/>
  </>
)
