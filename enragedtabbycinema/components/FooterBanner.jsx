import React from 'react'

const FooterBanner = () => {
  const footer = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'top',
    justifyContent: 'center',
    backgroundColor: '#171717',
    height: '100px',
    marginTop: '125px',
  }
  const footer_logo = {
    color: '#e7e9eb',
    fontSize: '30px',
    fontWeight: '600',
    letterSpacing: '-1px',
    marginTop: '10px'
  }
  return (
    <div style={footer}>
      <div style={footer_logo}>
        Enraged Tabby Cinema
      </div>
    </div>
  )
}

export default FooterBanner