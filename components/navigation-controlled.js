import React, {useState, useEffect} from 'react';
const StateButtonsMap = require('../data/states.json');

function NavigationControlled(){
  const [curState, updateCurState] = useState("login-default");
  const [imageClassName, updateImageClassName] = useState("navigation-image-slide");
  
  useEffect(() => {
    if(imageClassName){
      const timeout = setTimeout(() => {
        updateImageClassName(undefined);
      }, 1000)
      return () => clearTimeout(timeout);
    }
  }, [imageClassName])

  function handleUpdateState(nextState){
    updateCurState(nextState);
    updateImageClassName("navigation-image-slide")
  }
  
  const imageUrl = `./static/images/states/${curState}.png`;

  return(
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      width: "100%",
      }}>
      <div style={{width: "600px", height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <img 
          className={imageClassName}
          src={imageUrl} alt={curState}
          />
       </div>
       <div style={{position: "relative"}}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          position: "absolute",
          left: 10,
          height: "100%"
        }}>
          {StateButtonsMap[curState].map((b, i) => (
            <button 
              style={{
              width: "220px"
              }}
              key={`${curState}${i}`} onClick={() => handleUpdateState(b.next)}>{b.label}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavigationControlled;