import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 

<div className="col-12">
    <nav className="navbar">
    <h1 className="text-white text-center"> <Link to='/'>Phone Directory</Link></h1>
    </nav>
</div>
     );
}
 
export default Navigation;