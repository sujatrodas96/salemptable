import React from 'react'
import {Link} from 'react-router-dom'
class Menu extends React.Component
{
  
  render(){
      return(
       <div>
           <ul>
               <li>
                   <Link to="/Register">REGISTER</Link>
               </li>
               <li>
                   <Link to="/Search">Search</Link>
               </li>
               <li>
                   <Link to="/Update">Update</Link>
               </li>
               <li>
                   <Link to="/Salregister">Salary Register</Link>
               </li>
               <li>
                   <Link to="/Salsearch">Salary Search</Link>
               </li>
               <li>
                   <Link to="/Salupdate">Salary Update</Link>
               </li>
               
           </ul>
       </div>
      );
  }
}

export default Menu;