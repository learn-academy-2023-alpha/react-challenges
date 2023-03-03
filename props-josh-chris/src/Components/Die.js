import React, {useState} from 'react';
import Results from './Results';

const Die = (props) => {
      // - Die component tracks its current value and displays that value
      // - has an onclick that will call a new roll method to randomize its value

      return (
      <div className={props.style} onClick={() => props.newRoll()}>
            {/* <h2>{props.value}</h2> */}
            <img src={props.dieFace} height={50} width={50} />
      </div>
      )}

export default Die