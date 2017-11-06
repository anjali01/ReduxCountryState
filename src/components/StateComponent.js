import React from 'react'

const StateComponent = (props) => {
  return (
      <div>
          <select id='state_dropdown' options={props.options}>
          </select>
      </div>
  )
}

export default StateComponent