import React from 'react';
import {Link} from 'react-router-dom';
const Addbutton = () => {
    return ( <div className="container">
        <div className="row border">
        <div className="col-12">
        <Link to="/add">
        <button type="button" class="btn btn-primary button">Add Contacts</button>
        </Link>
        </div>
       
            </div> 
      
    </div> );
}
 
export default Addbutton;