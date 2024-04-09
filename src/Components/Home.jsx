import React, { useContext } from 'react'
import ImgBox from './ImgBox';
import { pictureContext } from '../PinContext';

const Home = () => {

  const { pin } = useContext(pictureContext);

  return (
  
   <div className='homeBox'>
    {pin.map((img)=>(
    <ImgBox img={img} />
    ))}
   </div>
  );
}

export default Home