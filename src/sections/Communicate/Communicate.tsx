import { FC } from 'react'
import { Social } from '../../components/Social/Social'
import { Button } from '../../components/Buttons/Button'
import { useNavigate } from 'react-router'

export const Communicate: FC = () => {
  const navigate = useNavigate()

  return (
    <section>
      <div>
        <h1>Spread the word</h1>
        <p>Support Ukraine by following and sharing Ukraine news and info</p>
        <h2>Follow our social accounts:</h2>
        <Social />
        <h2>Share our petitions and write to your MP:</h2>
        <Button text='View Petitions!' onClick={() => navigate('/support/petitions')} />
      </div>
    </section>
  )
}
