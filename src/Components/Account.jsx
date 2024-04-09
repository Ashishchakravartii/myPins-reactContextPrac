import React, { useContext } from 'react'
import { pictureContext } from '../PinContext';
import ImgBox from './ImgBox';

const Account = () => {
    const { myPin } = useContext(pictureContext);

  return (
    <>
      <h1 className="accountHead">Your Pins {myPin.length} </h1>
      <div className="homeBox">
        {myPin.map((img) => (
          <ImgBox img={img} />
        ))}
      </div>
    </>
  );
}

export default Account