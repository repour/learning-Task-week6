import React from 'react'
import './TheFooter.css'
import FooterList from './FooterList'

const TheFooter = () => {

  const product = ['Product', 'Browse sounds', 'Pricing', 'FAQ', 'Affiliate']
  const company = ['Company', 'Blog', 'About us', 'Help', 'Career']
  const socialMedia = ['Social Media', 'Twitter', 'Instagram', 'YouTube', 'Facebook']
  return (
    <>
      <div className='footer'>
        <div className='left-sec-footer'>
          <img src="./TheFooter/WavesCo.svg" alt="logo-footer" />
          <p className='parag-footer'>WavesCo is a platform for providing premium sound effects for Youtube videos, movies and many more.</p>
          <span>WavesCo ©2021, All rights reserved</span>
        </div>
        <div><FooterList
          list={product}
        /></div>
        <div><FooterList
          list={company}
        /></div>
        <div><FooterList
          list={socialMedia}
        /></div>
      </div>
      <div className="tablet-container">
        <div className="tablet-left-sec">
          <div className='left-sec-footer'>
            <img src="./TheFooter/WavesCo.svg" alt="logo-footer" />
            <p className='parag-footer'>WavesCo is a platform for providing premium sound effects for Youtube videos, movies and many more.</p>
            <span>WavesCo ©2021, All rights reserved</span>
          </div>
        </div>
        <div className="tablet-footer-list">
          <div><FooterList
            list={product}
          /></div>
          <div><FooterList
            list={company}
          /></div>
          <div><FooterList
            list={socialMedia}
          /></div>
        </div>
      </div>
    </>
  )
}

export default TheFooter