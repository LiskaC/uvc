import { FC } from 'react'

export const Initiatives: FC = () => (
  <>
    <h1>Find initiatives to support</h1>
    <p>
      We work with many groups who have need of volunteers, supplies and donations. Want to help?
      Find initiatives to support here!
    </p>
    <section>
      <label htmlFor='search'>
        <span>Search here: </span>
        <input type='text' id='search' name='search' placeholder='drones...'/>
      </label>
      <div>
        <div>
          <h2>Initiative name</h2>
          <img src='https://ndow-production-media.s3-us-gov-west-1.amazonaws.com/wp-content/uploads/2021/10/Family-of-Raccoons.jpg' alt='photo of group' width='300px'/>
          <p>This is what they do</p>
          <a href=''>Link to donate</a>
          <a href=''>Link to site/social media</a>
        </div>
      </div>
    </section>
  </>
)
