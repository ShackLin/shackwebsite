import React, { useContext } from 'react'
import '../Css/NightButtonStyle.css'
import { NightModeContext } from '../ContextComponent/ChangeNight'

export default function NightButton() {
      const { isNightMode, setIsNightMode } = useContext(NightModeContext)
      const handleNightMode = () => {
            setIsNightMode(!isNightMode);
      };
      return (
            <div className="onoffswitch">
                  <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch2" tabIndex="0" defaultChecked={true} onClick={handleNightMode} />
                  <label className="onoffswitch-label" htmlFor="myonoffswitch2">
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                  </label>
            </div>
      )
}