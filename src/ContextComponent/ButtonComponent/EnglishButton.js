import React from 'react'
import '../Css/EnglishButton.css'

export default function EnglishButton() {
  return (
    <div className="onoffswitch3">
      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox3" id="myonoffswitch3" tabIndex="0" defaultChecked={true} />
      <label className="onoffswitch-label3" htmlFor="myonoffswitch3">
        <span className="onoffswitch-inner3"></span>
        <span className="onoffswitch-switch3"></span>
      </label>
    </div>
  )
}
