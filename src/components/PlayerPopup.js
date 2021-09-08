import React from "react";

function PlayerPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={()=>props.setTrigger(false)} className="close-popup-btn">X</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default PlayerPopup;



