import React from "react";
import {Link} from "react-router-dom";



function Home() {
    
    return(
        
    <div>
        <div>
      <Link to="/game">Game</Link>
      </div>

    <p>This is the Home Page</p>
    
    </div>
    ) 
}

export default Home