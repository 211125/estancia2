import React from 'react'

function Button({msn, link, classNames}) {
  return (
    <a href={link}><button className={classNames}>{msn}</button></a>
  )
}

export default Button