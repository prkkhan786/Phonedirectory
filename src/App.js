import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link,Redirect } from "react-router-dom";
import Navigation from "./components/navigation";
import Addbutton from "./components/addbutton";
import Detailview from "./components/detailview";
import Add from "./components/Add";
class App extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      contacts:[{
        name:"parvez khan",
        number:9899817062,
      }
      ]
     
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handldelete = this.handldelete.bind(this);
  }

  handlechange(e) {
   const obj = {...this.state.details}
   obj[e.currentTarget.name] = e.currentTarget.value;
   this.setState({
     details:obj
   })
   console.log(this.state.details);
  }
  componentDidMount()
  {
    console.log("compoenent is mointerd")

  }
 
  handleClick(e){
    e.preventDefault();
    var contact = [...this.state.contacts];
    contact.push(this.state.details);

    this.setState({
      contacts:contact
    })

    

    




   

  }
  handldelete(val){
    const arr = [...this.state.contacts];
   const index =arr.indexOf(val);
   arr.splice(index,1);
   this.setState({
     contacts:arr
   })
  }
  
  render() {

    console.log(window.location.pathname)

    return (
      <div className="container-fluid">
        <div className="row">
        <Navigation />
        <Switch>
          <Route
            path="/add"
            render={props => (
              <Add handleChange={this.handlechange} {...props} 
              handleClick={this.handleClick}/>
            )}
          />
          <Route >
          <Addbutton />
          <Detailview 
          contacts={this.state.contacts}
          handldelete={this.handldelete}/>
          </Route>
          
        </Switch>
        </div>
        
      </div>
    );
  }
}

export default App;
