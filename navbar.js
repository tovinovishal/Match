
// import React from "react";
// import { Link } from "react-router-dom";
// function Navbar() {
//     return (

//         <div className='nav'>
//         <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&display=swap" rel="stylesheet" />
//         <header className="box-shadow">
//           <div className="section logo">
           
//           </div>
//           <div className="section">
//             <ul>
//               <li><Link to="/MatchGet">Get</Link></li>
//               <br/>
//               <li><Link to="/MatchPost">Post</Link></li>
//               <br/>
//               <li><Link to="/MatchUpdate">update</Link></li>
//               <br/>
//               <li><Link to="/MatchDelete">Delete</Link></li>
//             </ul>
//           </div>
//         </header>
//       </div>

//     );
//   }
// export default Navbar;

import { Link } from 'react-router-dom';
function Navbar(){

    return (
      <div class="nav">
        <header className="header">
          <nav className="navbar">
          <ul>
             <li><Link to="/MatchGet">Get</Link></li>
             
              <li><Link to="/MatchPost">Post</Link></li>
             
             <li><Link to="/MatchUpdate">update</Link></li>
               
               <li><Link to="/MatchDelete">Delete</Link></li>
             </ul>
            
          </nav>
        </header>
       
        
      </div>
    );
  }
export default Navbar;