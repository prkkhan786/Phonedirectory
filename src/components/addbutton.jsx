import React from 'react';
import {Link} from 'react-router-dom';
const Addbutton = () => {
    return ( 
        
        <div className="col-sm-12 app" style={{margin:"1%"}}>
        <Link to="/add">
        <button style={{position:"relative",left:"49%"}} type="button" class="btn btn-primary button">Add Contacts</button>
        </Link>
       
       
           
      
    </div> );
}
 
export default Addbutton;