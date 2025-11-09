import { FC } from 'react'
import { Communicate } from '../../sections/Communicate/Communicate'

export const About: FC = () => (
  <section>
    <div>
      <h1>About us</h1>
      <p>
        We are a volunteer-run organisation of Ukrainians and friends of Ukraine based in Scotland,
        united by a simple mission: to work for Ukrainian victory. We bring forward the voices of
        one of the most vulnerable groups in Ukraine - Ukrainian prisoners of war (POWs), and stand
        in support of Ukraine’s Defenders. We raise awareness, mobilise support, and direct funds to
        have impact in critical areas.
      </p>
    </div>
    <div>
      <h2>📖 Our story</h2>
      <p>
        Our journey began on 16 September 2023, when we held a meeting of all the active Ukrainian
        volunteer organisations and activists from across Edinburgh at the Consulate of Ukraine.
        From that meeting, we established a working group of around 30 dedicated activists, focussed
        on raising awareness about the ongoing violations of human rights of Ukrainian POWs.{' '}
      </p>
      <p>From that moment, our campaign grew.</p>
    </div>
    <div>
      <h2>✊ Building a movement</h2>
      <p>
        Our weekly demonstrations brought together newly arrived to Scotland Ukrainians eager to
        help their homeland from abroad, and the local community keen to support and learn more
        about Ukraine. These gatherings became not only a form of demonstration but also a meeting
        place, a community, and a bridge between Scotland and Ukraine.
      </p>
      <p>
        Growing beyond the demonstrations, we developed a unique platform that brings voices from
        Ukraine directly to the Scottish public. Together, we have organised a wide range of
        engaging, open to the public events touching on important topics that arose from the war in
        Ukraine.
      </p>
      <p>
        While the war takes, we are working to save, preserve and grow - acting as a vital link of
        communication between those on and beyond the frontline, and the public here in Scotland.
      </p>
    </div>
    <div>
      <h2>🌍 Connecting communities</h2>
      <p>
        Through our efforts in Edinburgh, we’ve connected Scotland with diverse Ukrainian
        communities not only in Ukraine but around the world. By joining collaborative actions and
        representing Edinburgh and Scotland, we bring forward Scotland’s distinctive voice, values,
        and solidarity.
      </p>
    </div>
    <div>
      <h2>💪 Why We Do It</h2>
      <p>
        We may be far from the frontlines, but we know that every action matters. Whether it’s a
        pound donated, a public protest attended, or a conversation with a stranger, we believe that
        consistent, visible solidarity can change minds — and save lives.
      </p>
    </div>
    <div>
      <h2>🌻 We are:</h2>
      <ul>
        <li>Activists</li>
        <li>Volunteers</li>
        <li>Fundraisers</li>
        <li>Organisers</li>
        <li>Friends</li>
      </ul>
    </div>
    <a className='cta' href='/events/volunteer'>
      Join us as a volunteer
    </a>
    <Communicate />
  </section>
)
