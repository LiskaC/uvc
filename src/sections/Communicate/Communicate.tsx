import { FC } from 'react'
import { Social } from '../../components/Social/Social'

export const Communicate: FC = () => (
  <section>
    <h1>Spread the word</h1>
    <p>Support Ukraine by following and sharing Ukraine news and info</p>
    <h2>Follow our social accounts:</h2>
    <Social/>
    <h2>Other reliable sources:</h2>
    <ul>
      <li>
        <p>This is news source blah</p>
        <a href=''>united.24 site</a>
      </li>
      <li>
        <p>Another Scottish Ukrainian group</p>
        <a href='https://helpukrainescotland.com/'>https://helpukrainescotland.com/</a>
      </li>
      <li>
        <p>This is news source blah</p>
        <a href=''>united.24 site</a>
      </li>
    </ul>
  </section>
)
