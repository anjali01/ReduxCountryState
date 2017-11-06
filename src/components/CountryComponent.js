import React from 'react'

const CountryComponent = (props) => {
    return (
        <div>
            <select id='country_dropdown' onChange={(event) => props.onChange(event.target.value)}>
              {props.options.map(item => {return <option value={item.code}>{item.label}</option>})}
            </select>
        </div>
    )
}

export default CountryComponent