import React from 'react'

export default function Header({page}) {
  const styles = {title: page === 'about' ? 'About Us' : 'Contact Us', image: page === 'about' ? 'about' : 'contact'}
  return ( 
      <div className={`header ${styles.image}`}>
        <div className='header-wrapper'></div>
        <h1 className='header-title'>{styles.title}</h1>
      </div>
  )
}
