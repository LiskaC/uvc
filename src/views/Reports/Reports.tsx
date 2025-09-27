import { FC, useEffect } from 'react'
import { useLocation, Link } from 'react-router'

import styles from './Reports.module.scss'

import pdf1 from 'url:../../assets/pdfs/Financial review 2023-2024.pdf'
import pdf2 from 'url:../../assets/pdfs/UVC Financial report (detailed) - 2023-2024.pdf'

const pdfs = [
  {
    filename: pdf1,
    text: 'Financial review 2023-2024',
  },
  {
    filename: pdf2,
    text: 'Financial report 2023-2024',
  },
]

export const Reports: FC = () => {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  return (
    <>
      <h1>Reports</h1>
      <ul className={styles['reports__list']}>
        <li>
          <Link to='#fundraising'>Raising funds</Link>
        </li>
        <li>
          <Link to='#spending'>Spending</Link>
        </li>
        <li>
          <Link to='#impact'>Impact</Link>
        </li>
      </ul>
      <p>
        Our financial goal is to support the Ukrainian Armed Forces and cover organisational costs.
        Our guiding principles:
      </p>
      <ul>
        <li>
          Transparency: We commit to maximum openness and clarity with our members, supporters and
          activists.
        </li>
        <li>
          Accountability: We provide regular financial reports to our community - both weekly and
          monthly.
        </li>
        <li>
          Responsible financial management: We set realistic targets and use donations wisely and
          effectively.
        </li>
      </ul>
      <h2 id='fundraising'>Raising funds</h2>
      <p>
        We rely on community-led efforts and grassroots support. Our main fundraising activities
        include:
      </p>
      <ul>
        <li>
          <b>Bake sales:</b> Organised during our weekly public demonstrations in the heart of
          Edinburgh.
        </li>
        <li>
          <b>Events:</b> Auctions and sales held during cultural gatherings and informative events.
        </li>
        <li>
          <b>In-kind contributions:</b> As our activists share our passion, a part of the funds have
          been in-kind contributions to support our cause.
        </li>
      </ul>
      <p>
        🧡 We are deeply grateful to every volunteer who organises events, bakes delicious cakes,
        designs posters, or stands with us in the streets — your contribution powers our work.
      </p>
      <p>
        <b>Want to get involved?</b> Whether you’d like to volunteer or support us in any other way
        —{' '}
        <a
          // eslint-disable-next-line max-len
          href='https://docs.google.com/forms/d/e/1FAIpQLSdH4mXkx09d04GKyghh07hWAvDNandl-0OQOEum6WQDMKm4yg/viewform'
          target='_blank'
          rel='noreferrer'
        >
          contact us via our form
        </a>{' '}
        or visit one of our weekly events.
      </p>
      <h2 id='spending'>Spending</h2>
      <p>
        We use the money we raise to respond directly to the needs of Ukrainian defenders and to
        sustain our advocacy and outreach.
      </p>
      <p>🇺🇦 Aid to Ukraine</p>
      <ul>
        <li>
          <b>Direct requests from the frontline:</b> We respond to needs shared with us directly by
          those on the frontline or volunteers. Every pound raised goes to causes we personally
          trust and verify.
        </li>
        <li>
          <b>Fundraiser support:</b> We provide grants to trusted Ukrainian crowdfunding
          initiatives.
        </li>
      </ul>
      <p>🛠 Operational Costs</p>
      <ul>
        <li>
          <b>Volunteer reimbursements:</b> For printing materials, bake sale ingredients, or event
          expenses.
        </li>
        <li>
          <b>Event logistics:</b> Venue hire, catering, travel, and technical equipment.
        </li>
      </ul>
      <h3>Our annual financial reports</h3>
      <p>We publish annual reports detailing how each donation is used.</p>
      <ul className={styles['reports__spending-list']}>
        {pdfs.map((pdf) => (
          <li key={pdf.filename}>
            <a
              href={pdf.filename}
              target='_blank'
              rel='noreferrer'
              className={styles['reports__spending-link']}
            >
              {pdf.text}
            </a>
          </li>
        ))}
      </ul>
      <h2 id='impact'>Our Impact</h2>
      <p>Together, we’ve achieved incredible things—and we’re aiming to do much more. </p>
      <ol>
        <li>
          Held over 100 public demonstrations to raise awareness and engage with the public about
          the most pressing issues relating to Ukrainian POWs
        </li>
        <li>
          Supported 12 grassroots fundraisers from Ukraine, focusing on providing equipment to the
          frontline troops.
        </li>
        <li>
          Delivered 10 requested packages to based on requests from the units working in the combat
          areas
        </li>
        <li>
          Organised and co-hosted multiple cultural events, including film screenings, Q&A sessions
          with Ukrainian soldiers, art exhibitions and music festivals.
        </li>
        <li>
          Collected and supplied over 150 kg of used vapes to be recycled into power banks in
          Ukraine
        </li>
      </ol>
    </>
  )
}
