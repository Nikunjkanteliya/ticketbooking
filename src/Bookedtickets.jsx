import React from "react";
import { Link } from "react-router-dom";
const Bookedtickets = () => {
  return (
    <div>
        

      <h1> YOUR TICKETS ARE SUCCESSFULLY BOOKED!</h1>
      <img src="https://media.tenor.com/xVfFIHxAzW4AAAAC/success.gif" alt = "success" style={{borderRadius : "0%"}} />
     <div>
     <Link to={"/"}>
    <button style={{marginLeft:"1rem"}}>  HOMEPAGE</button>
    </Link>
     </div>
        
    </div>
  );
};

export default Bookedtickets;
