import React from 'react'

function Title({level, text}) {
  return (
    <div>
        {level === 'h1' && <h1>{text}</h1>}
        {level === 'h2' && <h2>{text}</h2>}
        {level === 'h3' && <h3>{text}</h3>}
        {level === 'h4' && <h4>{text}</h4>}
    </div>
  )
}

export default Title