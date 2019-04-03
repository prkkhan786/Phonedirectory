import React, { Component } from 'react';

class Detailview extends Component {
    state = {  }
    render() { 
      if(this.props.contacts.length===0){
        return (
          <div>
            No Contacts s
          </div>
        )
      }
        return ( <div className="col-12 border">
        <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
    </tr>
  </thead>
  <tbody>
      {this.props.contacts.map((u)=>(
           <tr>
           <th scope="row">{u.name}</th>
           <td>{u.number}</td>
           <button type="button" 
           className="btn btn-danger button"
            onClick={()=>this.props.handldelete(u)}>Delete</button>
         </tr>
      ))}

  </tbody>
</table>
        </div> );
    }
}
 
export default Detailview;