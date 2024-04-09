import React, { useContext, useState } from "react";
import { pictureContext } from "../PinContext";

const ImgBox = ({ img }) => {
  const { myPin, setMyPin } = useContext(pictureContext);

  return (
    <div className="imgMainBox">
      <div className="imgBox">
        <img src={img.url} alt="" />
      </div>
      {myPin.includes(img) ? (
        <button style={{backgroundColor:"tomato", color:"white"}} onClick={()=>(setMyPin(myPin.filter((pin)=>pin.id !== img.id)))} >Remove</button>
      ) : (
        <button onClick={() => setMyPin([...myPin, img])}>Save</button>
      )}
    </div>
  );
};

export default ImgBox;
