import React, {useState, useEffect} from 'react';
import StateButtonsMap from '../data/states.json';

function NavigationMap(){
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
  
  const imageUrl = `/static/images/states/${curState}.png`;

  return(
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: "500px"
      }}>
    <img 
      className={imageClassName}
      src={imageUrl} alt={curState}
       />
      <div style={{
        display: 'flex',
        flexDirection: 'column'
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
  )
}

export default NavigationMap;