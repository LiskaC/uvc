import { FC, useEffect } from 'react'
import { useLocation, Link } from 'react-router'

import styles from './Reports.module.scss'

const pdfs = [
  { filename: 'this-is-a-pdf.pdf', text: 'Spending report 01.01.2025 - 31.01.2025' },
  { filename: 'this-is-a-pdf-2.pdf', text: 'Spending report 01.02.2025 - 28.02.2025' },
  { filename: 'this-is-a-pdf-3.pdf', text: 'Spending report 01.03.2025 - 30.03.2025' }
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
        <li><Link to='#spending'>Spending</Link></li>
        <li><Link to='#impact'>Impact</Link></li>
      </ul>
      <h2 id='spending'>Spending</h2>
      <p>Our monthly spending reports</p>
      <p>Open PDFs:</p>
      <ul className={styles['reports__spending-list']}>
        {pdfs.map(pdf => (
          <li key={pdf.filename}>
            <a href={pdf.filename} target='_blank' className={styles['reports__spending-link']}>
              {pdf.text}
            </a>
          </li>
        ))}
      </ul>
      <h2 id='impact'>Impact</h2>
      <p>Group A did B</p>
      <p>Images here</p>
    </>
  )
}
