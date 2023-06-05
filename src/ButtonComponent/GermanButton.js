import React from 'react'
import '../Css/GermanButton.css'

import { DeContext } from '../ContextComponent/ChangeGerman'
import { useContext } from 'react'
export default function GermanButton() {
      const { toogleDeutsch } = useContext(DeContext)
      return (
            <div className="onoffswitch2">
                  <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox2" id="myonoffswitch" tabIndex="0" defaultChecked={true} onClick={toogleDeutsch} />
                  <label className="onoffswitch-label2" htmlFor="myonoffswitch">
                        <span className="onoffswitch-inner2"></span>
                        <span className="onoffswitch-switch2"></span>
                  </label>
            </div>
      )
}
