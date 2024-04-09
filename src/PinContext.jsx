import React, { createContext, useState } from "react";
export const pictureContext = createContext();

const PinContext = ({ children }) => {
  const pictures = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlJTIwbmF0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1619957858854-1e43dfba3c4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlJTIwbmF0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1618688259579-54fc3b432a3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1620301598483-f872a86a58af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1615117804087-6629d6f20e80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1616445404301-7433dc521d1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1616445403956-c66a6b11e3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      url: "https://plus.unsplash.com/premium_photo-1701199092958-4e9186fa3328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const [myPin, setMyPin] = useState([])
  console.log(myPin);

  const [pin] = useState(pictures);
  return (
    <pictureContext.Provider value={{ pin, myPin, setMyPin }}>
      {children}
    </pictureContext.Provider>
  );
};

export default PinContext;
