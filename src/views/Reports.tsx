import { FC } from 'react'

import styles from './Reports.module.scss'

const pdfs = [
  { filename: 'this-is-a-pdf.pdf', text: 'Spending report 01.01.2025 - 31.01.2025' },
  { filename: 'this-is-a-pdf-2.pdf', text: 'Spending report 01.02.2025 - 28.02.2025' }
]

export const Reports: FC = () => (
  <>
    <h1>Reports</h1>
    <p>Our monthly spending reports</p>
    <p>Open pdfs:</p>
    <ul className={styles.reportList}>
      {pdfs.map(pdf => (
        <li>
          <a href={pdf.filename} id={pdf.filename} target='_blank' className={styles.reportLink}>
            {pdf.text}
          </a>
        </li>
      ))}
    </ul>
  </>
)
