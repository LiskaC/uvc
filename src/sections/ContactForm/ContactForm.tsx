import { FC } from 'react'
import { Submit } from '../../components/Buttons/Submit'

import styles from './ContactForm.module.scss'

export const ContactForm: FC = () => (
  <form action='https://formspree.io/f/xaneybbo' method='post' className={styles['contact__form']}>
    <p>
      Required fields are followed by 
      <strong><span aria-label='required'>*</span></strong>.
    </p>
    <label htmlFor='name' className={styles['contact__label']}>
      <span>
        <span>Name: </span>
        <strong><span aria-label='required'>*</span></strong>
      </span>
      <input type='text' id='name' name='name' required placeholder='Mary X'
        className={styles['contact__input']}/>
    </label>
    <label htmlFor='email' className={styles['contact__label']}>
      <span>
        <span>Email: </span>
        <strong><span aria-label='required'>*</span></strong>
      </span>
      <input type='email' id='email' name='email' required placeholder='email@email.com'
        className={styles['contact__input']}/>
    </label>
    <label htmlFor='alt-contact' className={styles['contact__label']}>
      <span>Other preferred means to contact: (optional)</span>
      <input type='text' id='alt-contact' name='altContact'
        placeholder='e.g. WhatsApp: +44xxxxxxxxxx' className={styles['contact__input']}/>
    </label>
    <label htmlFor='subject' className={styles['contact__label']}>
      <span>
        <span>Subject: </span>
        <strong><span aria-label='required'>*</span></strong>
      </span>
      <select id='subject' name='subject' required className={styles['contact__input']}>
        <option value='offer'>Offer Equipment</option>
        <option value='request'>Request Equipment</option>
        <option value='volunteer'>Volunteer</option>
        <option value='request'>Collaborate</option>
        <option value='other'>Other</option>
      </select>
    </label>
    <label htmlFor='message' className={styles['contact__label']}>
      <span>
        <span>Message:</span>
        <strong><span aria-label='required'>*</span></strong>
      </span>
      <textarea name='message' placeholder='Type in your message to us'
        required className={`${styles['contact__message']} ${styles['contact__input']}`}/>
    </label>
    <Submit text='Submit' extraStyles={styles['contact__submit']}/>
  </form>
)
