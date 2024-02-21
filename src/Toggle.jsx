import React, {useState} from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
}
return (
  <div>
    <p>The switch is {isOn ? 'On' : 'Off'}</p>
    <button onClick={toggle}>Toggle!</button>
  </div>
  );
}


export default Toggle;