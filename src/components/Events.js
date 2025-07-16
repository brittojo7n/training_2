import React from 'react'

function Events() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <div>
        <button onClick={shoot}>Take the shot!</button>
    </div>
  )
}

export default Events