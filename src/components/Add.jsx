import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Add extends Component {
  constructor() {
    super();
    this.state = {};
    this.pushback = this.pushback.bind(this);
  }

  pushback(){
    
  }
  render() {
    return (
      <div className="col-12">
      <div className="input-group mb-3 m-3">
       <form style={{width:"40%"}}>
       <span>
       <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          required
          onChange={this.props.handleChange}
        />  
       </span>
       <br />
        <span>
        <input
          type="number"
          name="number"
          className="form-control"
          placeholder="Number"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          required
          onChange={this.props.handleChange}
        />
        </span>
        

        
         <button style={{marginTop:"3%"}}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            onClick={this.props.handleClick}
          >
            Submit
          </button>
          
          </form>
      </div>
      </div>
    );
  }
}

export default Add;
