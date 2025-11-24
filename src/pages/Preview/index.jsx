import React from 'react';
import './Preview.css';
import backgroundImage from '../../assets/preview/Render.gif';
import { useRedirectAfterDelay } from '../../hooks/useRedirectAfterDelay';

const Preview = () => {

  useRedirectAfterDelay('/home', 5000);

  return (
    <div className="App">
      <img src={backgroundImage} alt=""  className='imgPreview'/>
    </div>
  );
};

export { Preview };